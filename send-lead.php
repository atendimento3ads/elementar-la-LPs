<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');
header("Content-Security-Policy: default-src 'none'; frame-ancestors 'none'; base-uri 'none'; form-action 'none'");
header('Referrer-Policy: no-referrer');

function respond(int $status, string $message): void
{
    http_response_code($status);
    echo json_encode(['message' => $message], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, 'Método não permitido.');
}

$contentLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength > 65536) {
    respond(413, 'Requisição muito grande.');
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '') {
    $originHost = strtolower((string) parse_url($origin, PHP_URL_HOST));
    if (!in_array($originHost, ['elementarla.com.br', 'www.elementarla.com.br'], true)) {
        respond(403, 'Origem não autorizada.');
    }
}

$contentType = strtolower($_SERVER['CONTENT_TYPE'] ?? '');
if (strpos($contentType, 'application/json') !== false) {
    $payload = json_decode((string) file_get_contents('php://input'), true);
    if (!is_array($payload)) {
        respond(400, 'Dados inválidos.');
    }
} else {
    $payload = $_POST;
}

// Campo-isca: deve permanecer vazio para visitantes reais.
if (trim((string) ($payload['website'] ?? '')) !== '') {
    respond(200, 'Mensagem recebida.');
}

function cleanLine($value, int $maxLength): string
{
    $text = trim((string) $value);
    $text = str_replace(["\r", "\n", "\0"], ' ', $text);
    $text = preg_replace('/\s+/u', ' ', $text) ?? '';
    return function_exists('mb_substr') ? mb_substr($text, 0, $maxLength) : substr($text, 0, $maxLength);
}

$name = cleanLine($payload['nome'] ?? '', 120);
$phone = cleanLine($payload['telefone'] ?? '', 40);
$email = filter_var(cleanLine($payload['email'] ?? '', 190), FILTER_VALIDATE_EMAIL);
$phoneDigits = preg_replace('/\D+/', '', $phone) ?? '';
$privacyConsent = cleanLine($payload['privacy_consent'] ?? '', 20);
$noticeVersion = cleanLine($payload['privacy_notice_version'] ?? '', 30);
$formStarted = (int) ($payload['form_started'] ?? 0);

if ($name === '' || strlen($phoneDigits) < 10 || strlen($phoneDigits) > 15 || $email === false) {
    respond(422, 'Preencha nome, telefone e e-mail corretamente.');
}

if ($privacyConsent !== 'accepted' || $noticeVersion !== '2026-09-28') {
    respond(422, 'É necessário aceitar a Política de Privacidade.');
}

$elapsed = (int) floor((microtime(true) * 1000) - $formStarted);
if ($formStarted <= 0 || $elapsed < 1500 || $elapsed > 86400000) {
    respond(422, 'Não foi possível validar o formulário. Recarregue a página e tente novamente.');
}

$recipient = 'atendimento@elementarambiental.com';
$subject = 'Novo lead - Licenciamento Ambiental';
$sender = 'no-reply@elementarla.com.br';

$lines = [
    'Novo lead recebido pela landing page da Elementar',
    '',
    'Nome: ' . $name,
    'Telefone: ' . $phone,
    'E-mail: ' . $email,
    'Página: ' . cleanLine($payload['page_url'] ?? '', 500),
    'Título da página: ' . cleanLine($payload['page_title'] ?? '', 200),
    'Consentimento de privacidade: aceito',
    'Versão do aviso: ' . $noticeVersion,
];

$campaignFields = [
    'utm_source' => 'UTM Source',
    'utm_medium' => 'UTM Medium',
    'utm_campaign' => 'UTM Campaign',
    'utm_term' => 'UTM Term',
    'utm_content' => 'UTM Content',
    'gclid' => 'GCLID',
    'fbclid' => 'FBCLID',
];

foreach ($campaignFields as $key => $label) {
    $value = cleanLine($payload[$key] ?? '', 500);
    if ($value !== '') {
        $lines[] = $label . ': ' . $value;
    }
}

$lines[] = '';
$lines[] = 'Data/hora do servidor: ' . date('d/m/Y H:i:s T');
$message = implode("\r\n", $lines);

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Site Elementar <' . $sender . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: Elementar Static Lead Handler',
];

$encodedSubject = function_exists('mb_encode_mimeheader')
    ? mb_encode_mimeheader($subject, 'UTF-8', 'B', "\r\n")
    : $subject;

if (!mail($recipient, $encodedSubject, $message, implode("\r\n", $headers))) {
    respond(500, 'O servidor não conseguiu encaminhar o e-mail.');
}

respond(200, 'Mensagem enviada com sucesso.');
