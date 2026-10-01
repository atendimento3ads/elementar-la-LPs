
/* =================== DADOS =================== */
const SECTIONS=[
 {id:'posicionamento',label:'Posicionamento'},
 {id:'personas',label:'Personas'},
 {id:'jornada',label:'Jornada'},
 {id:'processo',label:'Processo'},
 {id:'scripts',label:'Scripts'},
 {id:'kpis',label:'KPIs'},
 {id:'arquivos',label:'Banco de arquivos'}
];

const PERSONAS=[
{
 num:'Persona 01', nome:'O empreendedor notificado', resumo:'Já opera, descobriu que está irregular e tem prazo correndo.',
 quem:'Dono de indústria de pequeno e médio porte, posto de combustível, oficina, clínica, distribuidora ou comércio atacadista. Decide sozinho, às vezes com o contador ou o advogado no meio da conversa.',
 gatilho:'Auto de infração, notificação do órgão, exigência da prefeitura para o alvará, ou um cliente grande que pediu a licença para manter o contrato.',
 servicos:['Licença Corretiva','LO / LF','PCA','MCE','RTA','Renovação'],
 dores:['Tem prazo do órgão correndo e não sabe o que fazer primeiro','Não faz ideia de quais estudos a atividade dele exige','Já tentou resolver com um técnico avulso e o processo travou','Alvará, banco ou cliente grande estão condicionados à licença','Cada pessoa que ele consulta fala uma coisa diferente'],
 medos:['Ser multado ou embargado antes de conseguir regularizar','Pagar a consultoria e a licença não sair','Entrar num ciclo infinito de exigências do órgão','Ter a atividade interditada e parar de faturar'],
 desejos:['Resolver rápido e sem precisar entender de legislação ambiental','Ter alguém que fale com o órgão no lugar dele','Saber o custo total logo de cara, honorários mais taxas','Dormir tranquilo sabendo que a empresa está regular'],
 objecoes:[
  {q:'“Está caro. Achei quem faz por metade.”',a:'Concordo que existe mais barato. A diferença é o que acontece depois do protocolo: quem faz barato entrega o documento e some, e quando o órgão faz exigência você paga de novo, pra outra pessoa, e perde três meses. No nosso escopo, responder exigência já está dentro. Deixa eu te mostrar o que exatamente está incluso e aí a gente compara igual com igual.'},
  {q:'“Meu contador falou que ele resolve.”',a:'O contador é essencial na parte fiscal e no alvará, mas a licença ambiental exige responsável técnico habilitado, com ART, porque é o técnico que responde pelo estudo. Muita gente descobre isso depois que o processo já foi indeferido. Vale a gente conversar com ele junto, inclusive: a gente trabalha bem com contador.'},
  {q:'“Vou esperar o fiscal voltar pra ver no que dá.”',a:'Posso ser direto? Esperar costuma sair mais caro, porque quando a notificação vira auto de infração o prazo encurta e a multa já está aplicada. O caminho de regularização é o mesmo, só que sem multa e sem correria. Você prefere fazer isso agora, no seu tempo, ou no tempo do fiscal?'},
  {q:'“Quanto tempo demora pra sair a licença?”',a:'A parte que depende da gente tem prazo definido em contrato. A emissão em si depende da fila do órgão, e quem promete data pra isso está te enganando. O que eu posso garantir é o que reduz o tempo: protocolar completo, sem erro, e responder exigência em poucos dias em vez de semanas.'}
 ],
 criterios:['Velocidade de resposta no primeiro contato','Experiência comprovada com o órgão específico do caso dele','Clareza sobre o custo total, incluindo taxas','Alguém que assuma o processo inteiro, não só o documento'],
 canais:['Busca no Google e site da Elementar','Indicação de contadores, advogados e engenheiros','WhatsApp comercial','Grupos e associações setoriais'],
 script:'Oi [NOME], aqui é [SEU NOME], da Elementar Soluções Ambientais. Vi que você entrou em contato sobre a regularização da [ATIVIDADE].\n\nPra eu já te dar um caminho certo em vez de um chute: você chegou a receber alguma notificação ou exigência formal, ou está se antecipando?\n\nPergunto porque, se já tem prazo correndo, a gente prioriza o seu caso e monta o diagnóstico ainda esta semana.'
},
{
 num:'Persona 02', nome:'A incorporadora e a construtora', resumo:'Tem projeto novo, cronograma travado e licença como pré-requisito.',
 quem:'Engenheiro, gerente de projetos, coordenador de novos negócios ou sócio de construtora, incorporadora ou loteadora. Decide junto com a diretoria e frequentemente compara três propostas.',
 gatilho:'Novo empreendimento entrando em viabilidade, exigência do município para aprovar o projeto, ou financiamento bancário condicionado à licença.',
 servicos:['LP / LI / LO','EIV / RIV','EIT / RIT','EIA / RIMA','Laudo de ruído','DAI'],
 dores:['Cronograma da obra parado esperando licença','Município e estado pedindo coisas diferentes ao mesmo tempo','Estudo mal feito por consultoria anterior gerou exigência em cascata','Audiência pública e pressão da vizinhança no radar','Custo de carregamento do terreno subindo a cada mês de atraso'],
 medos:['Atrasar o cronograma financeiro do empreendimento','Ter o estudo reprovado e recomeçar do zero','Contratar consultoria sem repertório para o porte do projeto','Ser surpreendido por exigência que ninguém antecipou'],
 desejos:['Previsibilidade de prazo para encaixar no cronograma da obra','Um interlocutor técnico que aguente reunião com órgão e com diretoria','Estudo bem feito na primeira versão','Uma consultoria que resolva o pacote inteiro, não estudo avulso'],
 objecoes:[
  {q:'“Já tenho um consultor de confiança.”',a:'Ótimo, e não estou pedindo pra trocar. O que costuma acontecer é o consultor dar conta do rotineiro e travar quando aparece EIV, EIT ou uma exigência mais pesada. Fica registrado que a gente existe pra esses picos, e se quiser eu faço uma leitura sem custo do que o órgão vai exigir nesse empreendimento específico.'},
  {q:'“Preciso só do EIV, avulso.”',a:'Consigo fazer só o EIV. Mas deixa eu te avisar de uma coisa antes: na maior parte dos projetos desse porte o órgão pede o EIV junto com [OUTRO ESTUDO], e quem contrata separado acaba pagando duas mobilizações e duas visitas técnicas. Posso te mandar as duas versões da proposta pra você comparar o custo total?'},
  {q:'“A outra proposta veio mais barata.”',a:'Entendo. Nesse tipo de estudo, o preço quase sempre reflete a profundidade do levantamento de campo. O caro não é a proposta, é o retrabalho: estudo devolvido pelo órgão significa dois a quatro meses de obra parada. Se quiser, eu te mostro item a item o que está no nosso escopo e não está no outro.'},
  {q:'“Vocês têm caso parecido com o meu?”',a:'Temos. Desde 2018 já foram mais de três mil estudos e regularizações. Me diz o porte e a natureza do empreendimento que eu separo um caso equivalente e te mando ainda hoje.'}
 ],
 criterios:['Portfólio com projetos de porte parecido','Equipe multidisciplinar com responsável técnico próprio','Velocidade para responder exigência do órgão','Clareza contratual sobre escopo, prazos e revisões'],
 canais:['LinkedIn e relacionamento institucional','Indicação de arquitetos, urbanistas e engenheiros','Cotação direta com três consultorias','Eventos e associações do setor da construção'],
 script:'Oi [NOME], aqui é [SEU NOME], da Elementar Soluções Ambientais. A gente cuida do licenciamento e dos estudos ambientais de empreendimentos aqui em Goiás.\n\nVi que a [EMPRESA] está com o [EMPREENDIMENTO] em andamento. Antes de te mandar qualquer proposta, eu prefiro entender duas coisas: em que fase está o projeto e qual órgão está conduzindo.\n\nCom isso eu já consigo te dizer quais estudos vão ser exigidos e onde o processo costuma travar. Consegue 20 minutos essa semana?'
},
{
 num:'Persona 03', nome:'A operação contínua', resumo:'Licença ativa, condicionantes vencendo e nenhuma equipe interna para cuidar disso.',
 quem:'Responsável técnico, gerente de QSMS, gerente industrial ou proprietário de agroindústria, armazém, frigorífico, mineradora ou indústria já licenciada. Compra recorrência, não projeto.',
 gatilho:'Condicionante vencendo, renovação de licença que precisa ser pedida com antecedência, auditoria de cliente grande ou saída do responsável interno.',
 servicos:['Consultoria mensal','Acompanhamento de condicionantes','Renovação de licenças','PGRS','Relatórios e mapas','Sistema Ipê'],
 dores:['Condicionantes com prazo vencendo e ninguém monitorando','Relatórios periódicos acumulados','Renovação que precisa ser protocolada meses antes e passa batido','Equipe interna enxuta, o ambiental sobra pra quem já faz outras três coisas','Auditoria de cliente grande apontando não conformidade'],
 medos:['Perder o prazo de renovação e ter a operação suspensa','Multa por condicionante não cumprida','Perder contrato grande por não conformidade ambiental','Depender de uma única pessoa que pode sair da empresa'],
 desejos:['Calendário ambiental sob controle, com aviso antes do prazo','Relatórios organizados e prontos para auditoria','Um time que assuma a área ambiental inteira','Previsibilidade de custo mensal em vez de sustos'],
 objecoes:[
  {q:'“Tenho um técnico interno que cuida disso.”',a:'Faz sentido, e a gente não substitui ele, a gente sustenta. O que a gente vê muito é o técnico interno dar conta do dia a dia e ficar sem tempo pra renovação e pros relatórios, que são justamente o que gera multa. Podemos começar cuidando só do calendário de condicionantes e ver como flui.'},
  {q:'“Prefiro chamar só quando precisar.”',a:'Consigo trabalhar assim, mas te dou o contraponto: quando você chama porque precisou, o prazo normalmente já está estourado, e aí o serviço é mais caro e o risco de multa já existe. A mensalidade custa menos do que uma correria dessas por ano. Quer que eu te mande as duas modalidades pra comparar?'},
  {q:'“A mensalidade não cabe no orçamento agora.”',a:'Entendo. Vamos fazer diferente: eu faço primeiro um diagnóstico do seu passivo, sem compromisso de contrato mensal. Se aparecer pouca coisa, você mesmo toca. Se aparecer o que eu imagino que vai aparecer, a gente conversa sobre o formato que cabe no seu orçamento.'},
  {q:'“Já tenho consultoria contratada.”',a:'Sem problema. Só me responde uma coisa, por curiosidade profissional: eles te mandam o calendário de condicionantes com aviso antecipado, ou você é quem lembra eles? A resposta pra essa pergunta costuma dizer muito. Se estiver funcionando, ótimo. Se não, você sabe onde me encontrar.'}
 ],
 criterios:['Capacidade de assumir o passivo inteiro, não pontual','Organização e rastreabilidade dos relatórios','Atendimento consultivo, com aviso antes do prazo','Estabilidade e tamanho de equipe da consultoria'],
 canais:['Indicação e relacionamento de longo prazo','LinkedIn','Visita técnica presencial','Base de clientes antigos da Elementar'],
 script:'Oi [NOME], aqui é [SEU NOME], da Elementar Soluções Ambientais.\n\nA gente cuida da rotina ambiental de indústrias e operações que já têm licença: condicionantes, relatórios e renovação, com aviso antes do prazo estourar.\n\nPergunta rápida e sem compromisso: hoje quem acompanha o calendário de condicionantes da [EMPRESA]? Se for alguém que já faz outras funções, quase sempre tem prazo perto de vencer que ninguém viu. Posso fazer um diagnóstico rápido pra você?'
}
];

const JORNADA=[
{n:'01',t:'Não sabe que tem um problema',s:'Opera normalmente e nem imagina que a atividade exige licença.',
 sinais:['Nunca ouviu falar em licença ambiental para a atividade dele','Acha que alvará da prefeitura resolve tudo','Empresa nova ou atividade que mudou de porte sem atualizar licença'],
 objetivo:'Gerar consciência do risco sem soar alarmista.',
 acao:['Conteúdo educativo sobre quais atividades exigem licença','Pergunta de diagnóstico: “sua atividade se enquadra em qual CNAE?”','Parceria com contadores, que veem esse cliente antes da gente'],
 fala:'Muita gente não sabe, mas o alvará e a licença ambiental são coisas diferentes. Posso checar em dois minutos se a sua atividade exige licenciamento?'},
{n:'02',t:'Sabe do problema, não sabe o tamanho',s:'Recebeu notificação, exigência ou aviso e está perdido.',
 sinais:['Chegou notificação, e-mail do órgão ou visita de fiscal','Banco, prefeitura ou cliente grande pediu a licença','Está pesquisando no Google às pressas'],
 objetivo:'Traduzir o problema e assumir o comando da conversa.',
 acao:['Responder em minutos, não em horas','Pedir a documentação e o número do processo','Explicar em linguagem simples qual é o caminho'],
 fala:'Me manda uma foto da notificação. Em vez de te dar um chute, eu leio o que o órgão pediu e te digo exatamente qual é o caminho e o que ele vai exigir.'},
{n:'03',t:'Sabe que precisa de consultoria',s:'Entendeu que não resolve sozinho e começou a procurar quem faça.',
 sinais:['Pergunta preço logo no primeiro contato','Está falando com mais de uma consultoria','Quer saber prazo antes de qualquer coisa'],
 objetivo:'Sair da comparação por preço e ir para comparação por escopo.',
 acao:['Diagnóstico técnico antes de qualquer número','Mostrar o que entra no escopo que o concorrente não coloca','Trazer caso parecido do mesmo setor'],
 fala:'Consigo te passar valor, mas se eu chutar agora eu vou errar pra mais ou pra menos. Me dá 20 minutos de diagnóstico e você recebe uma proposta com o custo real, incluindo as taxas do órgão.'},
{n:'04',t:'Está avaliando a Elementar',s:'Tem proposta na mão e compara com uma ou duas concorrentes.',
 sinais:['Pede detalhamento do escopo','Pergunta sobre casos anteriores e sobre a equipe','Some por alguns dias e volta com contraproposta'],
 objetivo:'Vencer no que a proposta barata não cobre.',
 acao:['Comparativo item a item de escopo','Portfólio de casos do mesmo setor e porte','Deixar claro quem é o responsável técnico e quem responde exigência'],
 fala:'Coloca as duas propostas lado a lado comigo. Não é pra eu falar mal de ninguém, é pra você ver o que está incluso em uma e não está na outra. Se a outra cobrir tudo por menos, eu mesmo te digo pra ir nela.'},
{n:'05',t:'Pronto para fechar',s:'Quer resolver a parte contratual e começar.',
 sinais:['Pergunta sobre forma de pagamento e prazo de início','Pede o contrato','Envolve sócio, financeiro ou jurídico na conversa'],
 objetivo:'Reduzir atrito e começar rápido, com onboarding claro.',
 acao:['Contrato e condições enviados no mesmo dia','Checklist de documentos junto com o contrato','Data de visita técnica marcada antes do pagamento entrar'],
 fala:'Te mando o contrato ainda hoje e, junto, o checklist do que vou precisar de você. Se assinar até [DIA], eu já encaixo a visita técnica na semana que vem.'}
];

const ICONS={
 outorga:'<svg viewBox="0 0 24 24"><path d="M2 8c2.5-2 5.5-2 8 0s5.5 2 8 0M2 13c2.5-2 5.5-2 8 0s5.5 2 8 0M2 18c2.5-2 5.5-2 8 0s5.5 2 8 0" transform="translate(2)"/></svg>',
 licenciamento:'<svg viewBox="0 0 24 24"><path d="M20 4C11 4 5 9 5 16v4M20 4c0 8-5 12-11 12H5"/></svg>',
 residuos:'<svg viewBox="0 0 24 24"><path d="M4 7h16M10 4h4M6 7l1 13h10l1-13M10 11v6M14 11v6"/></svg>',
 vegetacao:'<svg viewBox="0 0 24 24"><path d="M12 3 6 11h3l-4 6h14l-4-6h3zM12 17v4"/></svg>',
 monitoramento:'<svg viewBox="0 0 24 24"><path d="M4 20V10M9 20V4M14 20v-7M19 20V8"/></svg>',
 pergunta:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3 2.4V14M12 17.2v.1"/></svg>',
 ramo:'<svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="2.4"/><circle cx="18" cy="6" r="2.4"/><circle cx="6" cy="18" r="2.4"/><path d="M6 8.4v7.2M8.4 6H14a2 2 0 0 1 2 2v0"/></svg>',
 preco:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M14.5 9.5c0-1.1-1.1-1.7-2.5-1.7s-2.5.7-2.5 1.8 1 1.5 2.5 1.9 2.7.8 2.7 2-1.2 1.8-2.7 1.8-2.6-.7-2.6-1.8"/></svg>',
 doc:'<svg viewBox="0 0 24 24"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4"/></svg>',
 alerta:'<svg viewBox="0 0 24 24"><path d="M12 4.5 2.8 20h18.4zM12 10v4.5M12 17.2v.1"/></svg>',
 mala:'<svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 12h18"/></svg>',
 nivel:'<svg viewBox="0 0 24 24"><path d="M5 20v-5M12 20V8M19 20v-9"/></svg>',
 pizza:'<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 9 9h-9z"/><path d="M14.5 3.5A9 9 0 0 1 20.5 9.5h-6z"/></svg>',
 alvo:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></svg>',
 chevron:'<svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>',
 check:'<svg viewBox="0 0 24 24"><path d="m5 13 4.5 4.5L19 7"/></svg>',
 rota:'<svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.5 6H14a4 4 0 0 1 0 8h-4a4 4 0 0 0 0 8h.5" transform="translate(0 -2)"/></svg>',
 relogio:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5.5l3.5 2"/></svg>'
};

/* Blocos de diagnóstico que se repetem em toda trilha de serviço. */
const BLOCOS=[
 {ic:'pergunta',t:'Perguntas obrigatórias',k:'obrig'},
 {ic:'ramo',t:'Perguntas condicionais',k:'cond'},
 {ic:'preco',t:'Informações que influenciam o orçamento',k:'orc'},
 {ic:'doc',t:'Documentos que devem ser solicitados',k:'docs'},
 {ic:'alerta',t:'Pontos de atenção',k:'risco',risk:true}
];

const PROCESSO=[
{st:'Etapa 01',nm:'Qualificação',
 obj:'Descobrir se é caso para a Elementar, qual serviço está em jogo e qual o nível de urgência, antes de gastar hora técnica.',
 titulo:'Triagem do lead',
 subtitulo:'Identificar o serviço, o órgão competente e a urgência real em uma única conversa.',
 micro:'Microetapa 1.1',
 blocos:{
  obrig:['Qual é a atividade e o CNAE principal','Em qual município a operação funciona','Já existe licença, outorga ou autorização hoje','Existe notificação, auto de infração ou prazo correndo','Quem decide e quem paga'],
  cond:['Se já foi notificado: prazo, número do processo e órgão','Se é projeto novo: fase do projeto e cronograma de obra','Se já teve consultoria antes: o que travou no processo anterior','Se tem mais de uma unidade: quais entram agora'],
  orc:['Número de unidades ou endereços envolvidos','Porte da operação e área construída','Urgência: com ou sem prazo do órgão correndo','Existência de passivo anterior a regularizar'],
  docs:['Cartão CNPJ e contrato social','Notificação ou exigência recebida','Licenças e protocolos anteriores','Localização ou coordenadas do empreendimento'],
  risco:['Conversa sem o decisor presente','Prazo do órgão vencendo em menos de 15 dias','Caso fora da área de atuação da Elementar','Cliente vindo de consultoria anterior mal resolvida']},
 painel:[{ic:'alvo',l:'Objetivo da etapa',v:'Identificar serviço e urgência'},{ic:'relogio',l:'Tempo de resposta',v:'Até 30 minutos no horário comercial'},{ic:'rota',l:'Saída da etapa',v:'Serviço identificado e urgência classificada'},{ic:'alvo',l:'Próxima ação',v:'Agendar o diagnóstico técnico'}],
 do:['Responder o lead em até 30 minutos no horário comercial','Pedir foto ou PDF da notificação logo no primeiro contato','Classificar por urgência: prazo correndo entra na frente'],
 dont:['Passar preço no primeiro contato sem entender o caso','Aceitar “é só uma licencinha” como descrição do escopo','Deixar o lead sem retorno mais de um dia útil'],
 frases:['Antes de qualquer valor, preciso entender três coisas: qual a atividade, em qual município e se já tem prazo do órgão correndo.','Você chegou a receber alguma notificação, ou está se antecipando? Isso muda bastante o caminho.']},

{st:'Etapa 02',nm:'Diagnóstico técnico',
 obj:'Levantar o que o órgão vai exigir para transformar o caso em escopo fechado. Cada serviço tem o seu próprio roteiro.',
 titulo:'Qualificação específica do serviço',
 subtitulo:'Coletar as informações técnicas mínimas para entender o escopo e liberar a elaboração da proposta.',
 servicos:[
 {id:'outorga',ic:'outorga',nome:'Outorga',servico:'Outorga de Recursos Hídricos',micro:'Microetapa 2.1',complexidade:'Média',proxima:'Solicitar documentos e dados faltantes',
  blocos:{
   obrig:['Município do empreendimento','Finalidade do uso da água','Tipo de captação','Vazão necessária','Horas de funcionamento por dia'],
   cond:['Se for poço: profundidade, teste de bombeamento, vazão medida','Se for captação superficial: corpo hídrico, bomba instalada, barramento','Se houver lançamento de efluente: ponto e volume de lançamento'],
   orc:['Número de pontos de captação','Necessidade de visita técnica','Existência de documentação prévia','Complexidade do processo'],
   docs:['Documentos do proprietário','Documentação do imóvel','Coordenadas ou localização','Dados técnicos existentes'],
   risco:['Outorga vencida','Captação já em uso sem regularização','Existência de fiscalização','Mais de um ponto de captação']}},
 {id:'licenciamento',ic:'licenciamento',nome:'Licenciamento',servico:'Licenciamento Ambiental',micro:'Microetapa 2.2',complexidade:'Alta',proxima:'Confirmar o enquadramento junto ao órgão',
  blocos:{
   obrig:['Atividade e CNAE do empreendimento','Município e órgão competente','Porte, área construída e área total','Fase atual: projeto, obra ou operação','Existe licença anterior, mesmo vencida'],
   cond:['Se já opera sem licença: tempo de operação e notificações recebidas','Se é projeto novo: cronograma de obra e prazo do financiamento','Se é renovação: data de vencimento e condicionantes pendentes','Se houver mais de uma unidade: quais entram no processo'],
   orc:['Tipo de licença exigida (LAS, LP, LI, LO, corretiva)','Estudos ambientais necessários','Necessidade de visita técnica','Número de unidades ou endereços','Taxas do órgão'],
   docs:['Contrato social e cartão CNPJ','Matrícula ou contrato do imóvel','Licenças e protocolos anteriores','Projeto arquitetônico ou layout da operação','Notificações e autos de infração recebidos'],
   risco:['Licença vencida ou processo anterior indeferido','Auto de infração em aberto','Porte incompatível com o alvará atual','Área com restrição ambiental (APP, reserva legal)','Atividade iniciada antes do licenciamento']}},
 {id:'residuos',ic:'residuos',nome:'Resíduos',servico:'Gerenciamento de Resíduos (PGRS)',micro:'Microetapa 2.3',complexidade:'Baixa a média',proxima:'Levantar volumes e destinação atual',
  blocos:{
   obrig:['Tipos de resíduos gerados','Volume mensal estimado','Destinação atual de cada tipo','Origem da exigência: órgão, contrato ou auditoria','Número de unidades geradoras'],
   cond:['Se gera resíduo perigoso (classe I): armazenamento e licença do transportador','Se for serviço de saúde: PGRSS específico e plano de contingência','Se houver obra: plano de resíduos da construção civil'],
   orc:['Quantidade de unidades a inventariar','Necessidade de levantamento em campo','Treinamento de equipe incluso ou não','Periodicidade dos relatórios'],
   docs:['MTRs e certificados de destinação final','Contratos com transportadores e receptores','Licenças ambientais dos prestadores','Layout da área de armazenamento temporário'],
   risco:['Destinação irregular em uso hoje','Ausência de MTR nas movimentações','Transportador ou receptor sem licença vigente','Prazo de entrega do plano ao órgão já correndo']}},
 {id:'vegetacao',ic:'vegetacao',nome:'Vegetação',servico:'Supressão e Manejo de Vegetação',micro:'Microetapa 2.4',complexidade:'Alta',proxima:'Confirmar situação do CAR e existência de APP',
  blocos:{
   obrig:['Localização e coordenadas da área','Tamanho da área a ser suprimida','Tipo de vegetação: nativa, exótica ou isolada','Finalidade da supressão','Município e órgão competente'],
   cond:['Se houver APP ou reserva legal: delimitação e situação do CAR','Se houver espécie protegida ou imune ao corte: inventário específico','Se for árvore isolada em área urbana: competência municipal e laudo de risco'],
   orc:['Área total em hectares','Necessidade de inventário florestal','Georreferenciamento incluso','Compensação ambiental exigida'],
   docs:['Matrícula do imóvel e recibo do CAR','Planta ou memorial descritivo da área','Projeto que justifica a supressão','Autorizações anteriores, se existirem'],
   risco:['Supressão já realizada sem autorização','Área inserida em APP','Embargo ambiental ativo sobre o imóvel','Presença de espécies protegidas','Exigência de compensação ambiental']}},
 {id:'monitoramento',ic:'monitoramento',nome:'Monitoramentos',servico:'Monitoramentos e Laudos Técnicos',micro:'Microetapa 2.5',complexidade:'Média',proxima:'Definir pontos de coleta e cronograma',
  blocos:{
   obrig:['Qual parâmetro será monitorado: ruído, efluente, água, ar ou solo','Origem da exigência: condicionante, contrato ou denúncia','Periodicidade exigida','Pontos de coleta ou medição','Prazo de entrega do relatório'],
   cond:['Se for ruído: horário de funcionamento, vizinhança e reclamações registradas','Se for efluente ou água: tipo de tratamento e parâmetros exigidos pelo órgão','Se for condicionante de licença: número da licença e prazo de cumprimento'],
   orc:['Número de pontos e de campanhas','Laboratório acreditado incluso','Deslocamento e logística de coleta','Duração do contrato de monitoramento'],
   docs:['Licença vigente com as condicionantes','Relatórios de campanhas anteriores','Planta com os pontos de coleta','Laudos técnicos já existentes'],
   risco:['Campanha anterior com resultado fora do padrão','Prazo de condicionante vencendo','Reclamação de vizinhança registrada','Ausência total de histórico de monitoramento']}}
 ],
 do:['Levar a equipe técnica para a reunião quando o caso for complexo','Mostrar ao cliente o passivo encontrado, mesmo o que não é bom de ouvir','Fechar a reunião com a data de envio da proposta acordada'],
 dont:['Fazer diagnóstico por telefone em caso de porte médio ou grande','Prometer que não vai haver exigência do órgão','Sair da reunião sem próximo passo com data'],
 frases:['O que eu encontrei aqui foi isso: [LISTA]. Vou te mandar por escrito, porque isso não é só pra proposta, é informação que você precisa ter.','A proposta chega até [DIA]. Podemos marcar 15 minutos pra eu apresentar em vez de você ler sozinho?']},

{st:'Etapa 03',nm:'Proposta e investimento',
 obj:'Apresentar escopo, prazos e investimento com separação clara entre honorários e taxas do órgão.',
 titulo:'Montagem e apresentação da proposta',
 subtitulo:'Transformar o diagnóstico em escopo fechado, com o investimento aberto item a item.',
 micro:'Microetapa 3.1',
 blocos:{
  obrig:['Escopo item a item, incluindo resposta a exigências','Honorários e taxas do órgão apresentados separadamente','Prazos internos definidos, sem prometer data de emissão','Responsável técnico nomeado na proposta','Validade da proposta e condições de pagamento'],
  cond:['Se houver passivo: fase de regularização destacada em separado','Se houver mais de uma unidade: preço por unidade e ganho de escala','Se for serviço recorrente: valor mensal e valor de implantação','Se o cliente tiver prazo curto: cronograma acelerado e o que ele exige'],
  orc:['Complexidade definida no diagnóstico','Quantidade de estudos ambientais necessários','Visitas técnicas e deslocamentos','Taxas do órgão, que não passam pela Elementar'],
  docs:['Portfólio de casos do mesmo setor','Minuta do contrato','Cronograma macro do processo','Checklist de documentos do cliente'],
  risco:['Enviar a proposta sem apresentar ao vivo','Embutir as taxas do órgão dentro do valor total','Prometer data de emissão da licença','Conceder desconto antes de o cliente pedir']},
 painel:[{ic:'mala',l:'Entregável da etapa',v:'Proposta com escopo e investimento abertos'},{ic:'pizza',l:'Composição do valor',v:'Honorários e taxas sempre separados'},{ic:'relogio',l:'Prazo de envio',v:'Até [PREENCHER] dias após o diagnóstico'},{ic:'alvo',l:'Próxima ação',v:'Apresentar ao vivo e só então enviar o PDF'}],
 do:['Apresentar ao vivo e só depois mandar o PDF','Explicar por que cada estudo está no escopo','Deixar registrado o que acontece quando o órgão faz exigência'],
 dont:['Mandar proposta e esperar resposta sem apresentar','Esconder as taxas do órgão dentro do valor total','Dar desconto antes de o cliente pedir'],
 frases:['O investimento se divide em duas partes: os honorários da Elementar e as taxas do órgão, que não passam por nós. Vou te mostrar as duas separadas pra você saber exatamente onde cada real vai.','Resposta a exigência já está inclusa. Isso é o que costuma virar custo extra quando se contrata mais barato.']},

{st:'Etapa 04',nm:'Negociação',
 obj:'Resolver a objeção real, que quase nunca é só preço.',
 titulo:'Condução da negociação',
 subtitulo:'Identificar o que de fato trava a decisão e usar as alavancas certas, na ordem certa.',
 micro:'Microetapa 4.1',
 blocos:{
  obrig:['O que exatamente está impedindo de fechar hoje','É valor, prazo, confiança ou momento','Existe outra proposta na mesa','Quem mais precisa aprovar','Qual a data de decisão'],
  cond:['Se for orçamento: faseamento do escopo por prioridade','Se for outra proposta: comparativo item a item de escopo','Se for momento: data acordada para retomar','Se for confiança: caso do mesmo setor e conversa com o técnico'],
  orc:['Alavancas na ordem: prazo de pagamento, faseamento, início imediato','Preço é a última alavanca, nunca a primeira','Alçada de desconto do vendedor: [PREENCHER]','O que sai do escopo quando o valor cai'],
  docs:['Comparativo de escopo com a proposta concorrente','Proposta revisada com o faseamento','Minuta de contrato pronta para assinatura'],
  risco:['Baixar preço sem conhecer o escopo do concorrente','Sumir depois do “vou pensar”','Criar urgência artificial em quem já tem prazo do órgão correndo','Negociar com quem não é o decisor']},
 painel:[{ic:'nivel',l:'Ordem das alavancas',v:'Prazo, faseamento, início. Preço por último'},{ic:'alerta',l:'Regra da casa',v:'Nenhum desconto antes de o cliente pedir'},{ic:'relogio',l:'Cadência de follow-up',v:'3 dias, 7 dias e encerramento'},{ic:'alvo',l:'Próxima ação',v:'Acordar a data de decisão com o cliente'}],
 do:['Perguntar direto: “o que está te impedindo de fechar hoje?”','Negociar prazo e faseamento antes de mexer no preço','Deixar o cliente comparar os escopos lado a lado'],
 dont:['Baixar preço para vencer proposta sem entender o escopo dela','Sumir depois do “vou pensar”','Pressionar com urgência artificial quem já está com prazo do órgão correndo'],
 frases:['Se o valor cheio não cabe agora, eu consigo fasear: começamos pelo que destrava o prazo do órgão e o resto entra depois. O que não dá é ficar parado.','Deixa eu te perguntar direto: se fosse pra fechar hoje, o que ainda faltaria?']},

{st:'Etapa 05',nm:'Fechamento e onboarding',
 obj:'Assinar, começar rápido e transferir bem para a equipe técnica.',
 titulo:'Fechamento e passagem para a técnica',
 subtitulo:'Reduzir o atrito da assinatura e garantir que o processo comece na semana seguinte.',
 micro:'Microetapa 5.1',
 blocos:{
  obrig:['Contrato assinado e primeira parcela confirmada','Checklist de documentos enviado ao cliente','Visita técnica ou kickoff agendado com data','Responsável técnico apresentado ao cliente','Expectativa de prazo e de exigências alinhada por escrito'],
  cond:['Se houver prazo do órgão correndo: o que protocolar primeiro','Se for contrato recorrente: calendário de condicionantes montado','Se houver passivo: riscos comunicados por escrito antes de iniciar','Se houver procuração: assinatura junto com o contrato'],
  orc:['Confirmação da forma de pagamento acordada','Taxas do órgão: quem recolhe e quando','Itens fora do escopo que podem virar aditivo'],
  docs:['Contrato assinado','Procuração para representação junto ao órgão','Documentos do checklist do cliente','ART do responsável técnico, quando aplicável'],
  risco:['Sumir depois da assinatura e deixar o técnico se apresentar sozinho','Prometer no fechamento o que não está no contrato','Deixar o checklist de documentos para depois','Iniciar sem a procuração assinada']},
 painel:[{ic:'mala',l:'Saída da etapa',v:'Processo iniciado com equipe técnica acionada'},{ic:'rota',l:'Passagem de bastão',v:'Comercial apresenta, técnica assume, comercial permanece'},{ic:'relogio',l:'Prazo de kickoff',v:'Até [PREENCHER] dias após a assinatura'},{ic:'alvo',l:'Próxima ação',v:'Enviar contrato e checklist no mesmo e-mail'}],
 do:['Mandar contrato e checklist no mesmo e-mail','Apresentar o time técnico ainda na semana da assinatura','Combinar a frequência de atualização do processo'],
 dont:['Sumir depois da assinatura e deixar o técnico se apresentar sozinho','Deixar o checklist de documentos para depois','Prometer no fechamento algo que não está no contrato'],
 frases:['A partir de agora quem conduz é a [NOME DO TÉCNICO], e eu continuo aqui. Você vai receber atualização a cada [PERÍODO], mesmo quando não tiver novidade.','Segue o checklist. Quanto antes esses documentos chegarem, antes a gente protocola.']}
];

const SCRIPTS=[
{tab:'Primeiro contato',items:[
 {t:'Lead do site ou WhatsApp',s:'Resposta em até 30 minutos.',b:'Oi [NOME], aqui é [SEU NOME], da Elementar Soluções Ambientais. Recebi seu contato sobre [ASSUNTO].\n\nPra eu já te dar um caminho certo em vez de um chute, me responde duas coisas:\n1. Qual é a atividade e em qual município ela funciona?\n2. Já existe alguma notificação ou prazo do órgão correndo?\n\nCom isso eu já consigo te dizer qual licença sua atividade exige e o que vai ser preciso.'},
 {t:'Indicação de contador ou advogado',s:'Quando alguém indicou a Elementar.',b:'Oi [NOME], tudo bem? Aqui é [SEU NOME], da Elementar Soluções Ambientais. O [QUEM INDICOU] me passou seu contato e comentou que a [EMPRESA] está precisando resolver a parte ambiental.\n\nA gente cuida do processo inteiro, do diagnóstico até a licença na mão, e é sempre bom trabalhar junto com quem já cuida da parte contábil e jurídica.\n\nConsegue 15 minutos essa semana pra eu entender o caso?'},
 {t:'Prospecção fria, operação já licenciada',s:'Para a persona de operação contínua.',b:'Oi [NOME], aqui é [SEU NOME], da Elementar Soluções Ambientais, de Goiânia.\n\nA gente cuida da rotina ambiental de indústrias e operações que já têm licença: condicionantes, relatórios periódicos e renovação, sempre com aviso antes do prazo.\n\nPergunta rápida: hoje quem acompanha o calendário de condicionantes da [EMPRESA]? Se for alguém que já acumula outras funções, quase sempre tem prazo perto de vencer que ninguém viu ainda.'}
]},
{tab:'Qualificação',items:[
 {t:'Roteiro de qualificação por telefone',s:'Cinco minutos, seis perguntas.',b:'1. Me conta rapidamente o que a empresa faz e há quanto tempo opera.\n2. Qual o CNAE principal e o porte, mais ou menos, em área e número de funcionários?\n3. Em qual município fica? Tem mais de uma unidade?\n4. Você já tem alguma licença ambiental hoje, mesmo que vencida?\n5. Existe notificação, auto de infração ou algum prazo correndo?\n6. Quem decide sobre a contratação, é você ou tem mais alguém?\n\nFecho: “Perfeito. Pelo que você me descreveu, o caminho passa por [LICENÇA / ESTUDO]. O próximo passo é um diagnóstico de 20 minutos, onde eu confirmo o que o órgão vai exigir. Prefere [DIA A] ou [DIA B]?”'},
 {t:'Quando o lead pede preço antes de tudo',s:'Sem fugir da pergunta.',b:'Consigo sim te falar de valor, e não vou fugir da pergunta. Só que se eu chutar agora, eu vou errar, e provavelmente pra mais.\n\nO investimento em licenciamento varia muito com o porte, a atividade e o órgão. Um caso simples e um caso com estudo de impacto têm faixas completamente diferentes.\n\nMe dá 20 minutos de diagnóstico e você sai com o número real, já separado entre honorários e taxas do órgão. Se depois disso não fizer sentido pra você, sem problema nenhum.'}
]},
{tab:'Diagnóstico',items:[
 {t:'Abertura da reunião de diagnóstico',s:'Define a regra do jogo.',b:'Obrigado pelo tempo, [NOME]. Deixa eu combinar como vai funcionar essa conversa.\n\nPrimeiro eu vou te fazer algumas perguntas sobre a operação e olhar a documentação que você já tem. Depois eu te digo o que o órgão vai exigir no seu caso, mesmo que seja informação que você não vai gostar de ouvir.\n\nNo final a gente combina a data da proposta. Se em algum momento eu perceber que não é caso pra Elementar, eu te falo isso na hora e te indico o caminho. Pode ser assim?'},
 {t:'Devolutiva do diagnóstico',s:'Entregar o problema com clareza.',b:'[NOME], o que eu encontrei foi o seguinte:\n\n• Situação atual: [SITUAÇÃO]\n• O que o órgão vai exigir: [ESTUDOS E DOCUMENTOS]\n• Risco hoje se nada for feito: [RISCO]\n• Caminho recomendado: [CAMINHO]\n\nVou te mandar isso por escrito, porque independente de fecharmos ou não, é informação que você precisa ter em mãos.\n\nA proposta com escopo e investimento chega até [DIA]. Podemos marcar 15 minutos pra eu apresentar?'}
]},
{tab:'Proposta',items:[
 {t:'Apresentação da proposta',s:'Nunca só mandar o PDF.',b:'Vou te apresentar em três blocos.\n\n1. Escopo: tudo que a Elementar assume, incluindo protocolo, acompanhamento e resposta a exigências do órgão. Isso último costuma ser cobrado à parte por outras consultorias, e no nosso escopo já está dentro.\n\n2. Prazos: os prazos que dependem da gente estão em contrato. A emissão em si depende da fila do órgão, e eu não vou te prometer data pra algo que não está na minha mão.\n\n3. Investimento: honorários da Elementar de um lado, taxas do órgão do outro. As taxas não passam por nós, então você vê exatamente onde cada real vai.\n\nAlguma parte dessas três você quer que eu detalhe melhor?'},
 {t:'Comparativo com proposta concorrente',s:'Quando o cliente tem outra na mão.',b:'Me manda a outra proposta, se puder. Não é pra eu falar mal de ninguém, é pra colocarmos lado a lado.\n\nO que eu quero que você olhe são quatro pontos:\n• Resposta a exigência está inclusa ou é cobrada à parte?\n• Quem é o responsável técnico nomeado e qual a formação dele?\n• Visita técnica está no escopo ou é extra?\n• As taxas do órgão estão dentro do valor ou fora?\n\nSe a outra cobrir esses quatro pontos por menos, eu mesmo te digo pra fechar com eles.'}
]},
{tab:'Objeções',items:[
 {t:'“Está caro”',s:'Sem baixar preço na primeira frase.',b:'Entendo. Antes de eu falar de valor, me ajuda com uma coisa: caro comparado com outra proposta, ou caro pro que a empresa consegue investir agora?\n\n[Se for outra proposta] Então vamos comparar escopo item a item, porque preço só faz sentido comparado com o que está incluso.\n\n[Se for orçamento] Nesse caso eu consigo fasear. A gente começa pelo que destrava o prazo do órgão e o resto entra depois. O que não dá é ficar parado com prazo correndo.'},
 {t:'“Vou pensar e te retorno”',s:'Transforma em data.',b:'Claro, decisão dessa não se toma na hora mesmo.\n\nSó pra eu não ficar te ligando sem necessidade: o que exatamente você precisa avaliar? É o valor, o prazo, ou tem alguém que precisa aprovar junto?\n\n[Depois da resposta] Perfeito. Então eu te procuro na [DIA], combinado? E se antes disso surgir qualquer dúvida, me chama direto.'},
 {t:'“Acho que consigo fazer isso sozinho”',s:'Sem desqualificar o cliente.',b:'Consegue, sim, em alguns casos. Se for uma atividade de baixo impacto com licença simplificada, é possível.\n\nO que trava a maioria das pessoas são duas coisas: o estudo precisa de responsável técnico habilitado com ART, e a resposta a exigência tem prazo curto, normalmente de 15 a 30 dias. Perdeu o prazo, o processo é arquivado e recomeça do zero.\n\nMinha sugestão honesta: deixa eu fazer o diagnóstico. Se der pra você tocar sozinho, eu te falo isso e ainda te oriento o caminho.'},
 {t:'“Agora não é o momento”',s:'Quando não há prazo correndo.',b:'Entendo, e se não tem prazo correndo, realmente dá pra planejar.\n\nSó um cuidado: regularização feita com calma custa menos e é mais barata que regularização feita depois de auto de infração, porque aí vem multa junto e o prazo é do fiscal, não seu.\n\nPosso fazer o seguinte: te mando o diagnóstico do que a sua atividade exige, sem custo, e a gente conversa de novo em [PERÍODO]. Aí você decide com informação na mão em vez de decidir no susto.'}
]},
{tab:'Follow-up',items:[
 {t:'Follow-up 1, três dias após a proposta',s:'',b:'Oi [NOME], tudo bem? Passando pra saber se você conseguiu olhar a proposta e se surgiu alguma dúvida no escopo.\n\nSe quiser, eu te ligo 10 minutos e a gente passa item a item. Prefere hoje à tarde ou amanhã de manhã?'},
 {t:'Follow-up 2, uma semana',s:'Traz informação nova.',b:'Oi [NOME], me lembrei do seu caso hoje. [INFORMAÇÃO NOVA: mudança no órgão, prazo, caso parecido que fechamos].\n\nSobre a proposta, ela segue válida. Se o momento não for agora, sem problema, só me diz pra eu não te encher e te procurar mais pra frente.'},
 {t:'Follow-up de encerramento',s:'Último da sequência.',b:'Oi [NOME]. Vou parar de te procurar sobre isso, porque respeito seu tempo.\n\nSe em algum momento aparecer notificação, exigência ou você quiser retomar, é só me chamar aqui, que eu já tenho todo o seu caso mapeado e a gente não precisa começar do zero.\n\nSucesso aí com a [EMPRESA].'}
]},
{tab:'Fechamento',items:[
 {t:'Pedido de fechamento',s:'',b:'[NOME], pelo que a gente conversou, o caminho está claro e o escopo atende. Eu queria fechar isso hoje por um motivo prático: [MOTIVO REAL, prazo do órgão, agenda da equipe técnica, janela do processo].\n\nEu te mando o contrato agora, você assina digitalmente e eu já encaixo a visita técnica na [SEMANA]. Podemos seguir assim?'},
 {t:'Onboarding pós-assinatura',s:'Primeira mensagem depois do contrato.',b:'[NOME], contrato assinado, obrigado pela confiança.\n\nComo a gente vai trabalhar daqui pra frente:\n\n1. Segue em anexo o checklist de documentos que vou precisar de você.\n2. A [NOME DO TÉCNICO] é a responsável técnica pelo seu processo e vai entrar no grupo hoje.\n3. Visita técnica agendada para [DATA].\n4. Você recebe atualização a cada [PERÍODO], mesmo quando não tiver novidade do órgão.\n\nQualquer coisa, me chama direto.'}
]}
];

const KPIS=[
 {n:'Leads qualificados por mês',f:'leads que passaram no roteiro de qualificação',d:'Mede o topo do funil. Se cair, o problema é marketing ou prospecção, não venda.',m:'Meta: [PREENCHER]'},
 {n:'Taxa de agendamento do diagnóstico',f:'diagnósticos agendados ÷ leads qualificados',d:'Mede a capacidade de transformar interesse em reunião. Abaixo de 50% costuma ser problema de abordagem.',m:'Meta: [PREENCHER]'},
 {n:'Comparecimento no diagnóstico',f:'diagnósticos realizados ÷ agendados',d:'No-show alto quase sempre é falta de confirmação um dia antes.',m:'Meta: [PREENCHER]'},
 {n:'Conversão proposta para contrato',f:'contratos fechados ÷ propostas enviadas',d:'O indicador mais importante do playbook. Cai quando a proposta é enviada sem apresentação.',m:'Meta: [PREENCHER]'},
 {n:'Ticket médio',f:'receita fechada ÷ contratos fechados',d:'Separe por linha: licenciamento, estudo avulso e consultoria mensal têm tickets muito diferentes.',m:'Meta: [PREENCHER]'},
 {n:'Ciclo de venda',f:'soma dos dias entre lead e assinatura ÷ contratos',d:'Casos com prazo do órgão correndo devem ter ciclo bem menor. Se não tiverem, a priorização está errada.',m:'Meta: [PREENCHER]'}
];

const FILES=[
 {i:'📄',t:'Apresentação institucional',d:'Deck da Elementar para enviar antes da reunião de diagnóstico.',l:'[PREENCHER]'},
 {i:'💰',t:'Tabela de honorários por serviço',d:'Faixas de referência por tipo de licença e estudo, para não chutar valor.',l:'[PREENCHER]'},
 {i:'📋',t:'Checklist de documentos por licença',d:'O que pedir ao cliente em cada tipo de processo, pronto para enviar.',l:'[PREENCHER]'},
 {i:'📝',t:'Modelo de proposta comercial',d:'Template com escopo padrão, honorários e taxas separados.',l:'[PREENCHER]'},
 {i:'🏆',t:'Portfólio de casos por setor',d:'Casos organizados por setor e porte, para anexar na proposta.',l:'[PREENCHER]'},
 {i:'⚖️',t:'Resumo da legislação por atividade',d:'Quais atividades exigem qual licença, por município e órgão.',l:'[PREENCHER]'},
 {i:'📊',t:'Taxas dos órgãos',d:'Tabela de taxas atualizada, para compor o investimento total.',l:'[PREENCHER]'},
 {i:'🤝',t:'Contrato padrão',d:'Minuta aprovada pelo jurídico, pronta para assinatura digital.',l:'[PREENCHER]'}
];

/* =================== RENDER =================== */
const $=s=>document.querySelector(s);
const esc=t=>String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

// NAV
$('#nav').innerHTML=SECTIONS.map((s,i)=>`<button data-go="${s.id}" class="${i===0?'active':''}"><i class="hex"></i>${s.label}</button>`).join('');
document.querySelectorAll('#nav button').forEach(b=>{
  b.onclick=()=>{
    document.querySelectorAll('#nav button').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    document.querySelectorAll('.section').forEach(x=>x.classList.remove('active'));
    document.getElementById(b.dataset.go).classList.add('active');
    window.scrollTo({top:0,behavior:'smooth'});
  };
});

// COPY com fallback
function copyText(txt,btn){
  const done=()=>{const o=btn.textContent;btn.textContent='Copiado';btn.classList.add('ok');setTimeout(()=>{btn.textContent=o;btn.classList.remove('ok')},1600)};
  try{
    const ta=document.createElement('textarea');
    ta.value=txt;ta.className='clipboard-helper';document.body.appendChild(ta);
    ta.select();document.execCommand('copy');document.body.removeChild(ta);done();
  }catch(e){
    if(navigator.clipboard){navigator.clipboard.writeText(txt).then(done).catch(done)}else{done()}
  }
}

// PERSONAS
$('#personaPicker').innerHTML=PERSONAS.map((p,i)=>
 `<button class="persona-btn ${i===0?'active':''}" data-p="${i}"><div class="num">${p.num}</div><h3>${p.nome}</h3><p>${p.resumo}</p></button>`).join('');

function renderPersona(i){
  const p=PERSONAS[i];
  $('#personaPanel').innerHTML=`
  <div class="tabs" data-tabs="p">
    ${['Quem é','Dores e medos','Desejos','Objeções','Critérios e canais','Script'].map((t,k)=>`<button class="${k===0?'active':''}" data-tab="pt${k}">${t}</button>`).join('')}
  </div>
  <div class="tabpane active" id="pt0">
    <h3 class="sub">Quem é</h3><p class="text-soft-spaced">${p.quem}</p>
    <h3 class="sub">O que dispara a busca</h3><p class="text-soft-spaced">${p.gatilho}</p>
    <h3 class="sub">Serviços que ela compra</h3><div>${p.servicos.map(s=>`<span class="pill petrol">${s}</span>`).join('')}</div>
  </div>
  <div class="tabpane" id="pt1">
    <div class="grid g2">
      <div><h3 class="sub">Dores</h3><ul class="check">${p.dores.map(d=>`<li>${d}</li>`).join('')}</ul></div>
      <div><h3 class="sub">Medos</h3><ul class="check amber">${p.medos.map(d=>`<li>${d}</li>`).join('')}</ul></div>
    </div>
  </div>
  <div class="tabpane" id="pt2"><h3 class="sub">O que ela quer de verdade</h3><ul class="check">${p.desejos.map(d=>`<li>${d}</li>`).join('')}</ul></div>
  <div class="tabpane" id="pt3">${p.objecoes.map(o=>`<div class="obj"><div class="obj-q">${o.q}<span class="plus">+</span></div><div class="obj-a">${o.a}</div></div>`).join('')}</div>
  <div class="tabpane" id="pt4">
    <div class="grid g2">
      <div><h3 class="sub">Critérios de decisão</h3><ul class="check petrol">${p.criterios.map(d=>`<li>${d}</li>`).join('')}</ul></div>
      <div><h3 class="sub">Onde ela está</h3><ul class="check">${p.canais.map(d=>`<li>${d}</li>`).join('')}</ul></div>
    </div>
  </div>
  <div class="tabpane" id="pt5">
    <div class="script persona-script">
      <div class="script-h"><div><h3>Abordagem para ${p.nome.toLowerCase()}</h3><small>Adapte os campos entre colchetes antes de enviar.</small></div><button class="copy">Copiar</button></div>
      <div class="script-body">${esc(p.script)}</div>
    </div>
  </div>`;
  wireTabs($('#personaPanel'));
  wireObj($('#personaPanel'));
  $('#personaPanel').querySelector('.copy').onclick=e=>copyText(p.script,e.target);
}
document.querySelectorAll('.persona-btn').forEach(b=>{
  b.onclick=()=>{document.querySelectorAll('.persona-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderPersona(+b.dataset.p)}
});
function wireTabs(scope){
  scope.querySelectorAll('.tabs button').forEach(b=>{
    b.onclick=()=>{
      b.parentElement.querySelectorAll('button').forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      scope.querySelectorAll('.tabpane').forEach(x=>x.classList.remove('active'));
      scope.querySelector('#'+b.dataset.tab).classList.add('active');
    };
  });
}
function wireObj(scope){
  scope.querySelectorAll('.obj-q').forEach(q=>{q.onclick=()=>q.parentElement.classList.toggle('open')});
}
renderPersona(0);

// JORNADA
$('#jornadaList').innerHTML=JORNADA.map((j,i)=>`
 <div class="jstage ${i===0?'open':''}">
   <div class="jstage-h"><div class="jlevel">${j.n}</div><div><h3>${j.t}</h3><p>${j.s}</p></div></div>
   <div class="jstage-b">
     <div class="grid g2 mb-16">
       <div><h3 class="sub">Como reconhecer</h3><ul class="check">${j.sinais.map(s=>`<li>${s}</li>`).join('')}</ul></div>
       <div><h3 class="sub">O que fazer</h3><ul class="check petrol">${j.acao.map(s=>`<li>${s}</li>`).join('')}</ul></div>
     </div>
     <p class="text-small-soft"><strong>Objetivo da etapa:</strong> ${j.objetivo}</p>
     <div class="script-body mb-top-12">${esc(j.fala)}</div>
   </div>
 </div>`).join('');
document.querySelectorAll('.jstage-h').forEach(h=>{h.onclick=()=>h.parentElement.classList.toggle('open')});

// PROCESSO
const ESTADO={};   // ESTADO[etapa][servico][bloco] = Set de índices marcados
function chaves(i,s){ESTADO[i]=ESTADO[i]||{};ESTADO[i][s]=ESTADO[i][s]||{};return ESTADO[i][s]}
function blocosDe(i,s){const p=PROCESSO[i];return p.servicos?p.servicos[s].blocos:p.blocos}
function totalEtapa(i){
  const p=PROCESSO[i];const n=p.servicos?p.servicos.length:1;let tot=0,feitos=0;
  for(let s=0;s<n;s++){
    const b=blocosDe(i,s),st=chaves(i,s);
    BLOCOS.forEach(bl=>{tot+=(b[bl.k]||[]).length;feitos+=(st[bl.k]||[]).length});
  }
  return {tot,feitos};
}
function pipeHTML(){
  return PROCESSO.map((p,i)=>{
    const {tot,feitos}=totalEtapa(i);
    const ok=tot>0&&feitos===tot;
    return `<button data-s="${i}" class="${i===etapaAtual?'active':''}">
      <div class="badge">${ok?ICONS.check:String(i+1).padStart(2,'0')}</div>
      <div><div class="st">${p.st}</div><div class="nm">${p.nm}</div></div></button>`;
  }).join('');
}
let etapaAtual=0, servicoAtual=0;

function renderStage(i,s){
  etapaAtual=i; servicoAtual=s||0;
  const p=PROCESSO[i];
  const temSvc=!!p.servicos;
  const svc=temSvc?p.servicos[servicoAtual]:null;
  const blocos=blocosDe(i,servicoAtual);
  const marcados=chaves(i,servicoAtual);

  const abas=temSvc?`<div class="svc">${p.servicos.map((x,k)=>
    `<button data-svc="${k}" class="${k===servicoAtual?'active':''}">${ICONS[x.ic]}${x.nome}</button>`).join('')}</div>`:'';

  const cabecalho=`
    <h2 class="heading-stage">${p.titulo}</h2>
    <p class="text-soft-spaced">${p.subtitulo}</p>
    <div class="svc-sel">
      <div class="ic">${ICONS[temSvc?svc.ic:'doc']}</div>
      <div>${temSvc?'Serviço selecionado: ':'Etapa: '}<b>${temSvc?svc.servico:p.nm}</b></div>
      <div class="micro">${temSvc?svc.micro:p.micro}</div>
    </div>`;

  const listaBlocos=BLOCOS.map(bl=>{
    const itens=blocos[bl.k]||[];
    const feitos=(marcados[bl.k]||[]).length;
    const cls=[ 'bloco', bl.risk?'risk':'', (itens.length&&feitos===itens.length)?'bloco-done':'' ].join(' ');
    return `<div class="${cls}" data-bl="${bl.k}">
      <div class="bloco-h">
        <div class="bloco-ic">${ICONS[bl.ic]}</div>
        <div class="bloco-t">${bl.t}</div>
        <div class="bloco-prev">${itens.slice(0,5).map(x=>`<i>${x.length>52?x.slice(0,50)+'…':x}</i>`).join('')}</div>
        <div class="bloco-count">${itens.length} ${itens.length===1?'item':'itens'} nesta trilha</div>
        <div class="bloco-chev">${ICONS.chevron}</div>
      </div>
      <div class="bloco-b">
        ${itens.map((x,k)=>{
          const on=(marcados[bl.k]||[]).includes(k);
          return `<label class="chk ${on?'done':''}"><input type="checkbox" data-bl="${bl.k}" data-k="${k}" ${on?'checked':''}><span>${x}</span></label>`;
        }).join('')}
      </div></div>`;
  }).join('');

  let linhasPainel;
  if(temSvc){
    const ob=blocos.obrig.length, obf=(marcados.obrig||[]).length;
    const status = obf===0?['Não iniciadas','warn'] : obf<ob?['Parcialmente preenchidas','warn'] : ['Completas','ok'];
    linhasPainel=[
      {ic:'mala',l:'Serviço identificado',v:svc.servico,c:''},
      {ic:'nivel',l:'Complexidade',v:svc.complexidade,c:''},
      {ic:'pizza',l:'Informações mínimas',v:status[0],c:status[1]},
      {ic:'alvo',l:'Próxima ação',v:svc.proxima,c:''}
    ];
  } else {
    linhasPainel=p.painel.map(x=>({ic:x.ic,l:x.l,v:x.v,c:''}));
  }
  const painel=`<div class="panel">${linhasPainel.map(r=>
    `<div class="panel-row ${r.c}"><div class="panel-ic">${ICONS[r.ic]}</div><div><small>${r.l}</small><strong>${r.v}</strong></div></div>`).join('')}</div>`;

  $('#stageBox').innerHTML=`
  <div class="card stage-card">
    ${abas}
    <div class="proc-grid">
      <div>
        ${cabecalho}
        <div class="checklist-caption">Checklist da etapa <b id="pct">0%</b></div>
        <div class="progress-wrap"><progress class="progress-bar" id="pbar" max="100" value="0">0%</progress></div>
        ${listaBlocos}
      </div>
      ${painel}
    </div>
  </div>
  <div class="do-dont mb-16">
    <div class="card do"><h4>Faça</h4><ul class="check">${p.do.map(d=>`<li>${d}</li>`).join('')}</ul></div>
    <div class="card dont"><h4>Não faça</h4><ul class="check amber">${p.dont.map(d=>`<li>${d}</li>`).join('')}</ul></div>
  </div>
  <div class="card">
    <h3 class="sub">Frases prontas desta etapa</h3>
    ${p.frases.map((f,k)=>`<div class="script-line"><div class="script-body">${esc(f)}</div><button class="copy" data-f="${k}">Copiar</button></div>`).join('')}
  </div>`;

  // abrir/fechar blocos
  $('#stageBox').querySelectorAll('.bloco-h').forEach(h=>{h.onclick=()=>h.parentElement.classList.toggle('open')});
  // checkboxes
  $('#stageBox').querySelectorAll('.bloco-b input').forEach(inp=>{
    inp.onchange=()=>{
      const k=inp.dataset.bl, idx=+inp.dataset.k;
      marcados[k]=marcados[k]||[];
      if(inp.checked){ if(!marcados[k].includes(idx)) marcados[k].push(idx); }
      else marcados[k]=marcados[k].filter(x=>x!==idx);
      inp.closest('.chk').classList.toggle('done',inp.checked);
      atualizarProgresso();
    };
  });
  // abas de serviço
  $('#stageBox').querySelectorAll('.svc button').forEach(b=>{
    b.onclick=()=>renderStage(i,+b.dataset.svc);
  });
  // copiar frases
  $('#stageBox').querySelectorAll('.copy').forEach(btn=>{btn.onclick=()=>copyText(p.frases[+btn.dataset.f],btn)});

  atualizarProgresso();

  function atualizarProgresso(){
    let tot=0,feitos=0;
    BLOCOS.forEach(bl=>{tot+=(blocos[bl.k]||[]).length;feitos+=(marcados[bl.k]||[]).length});
    const pc=tot?Math.round(feitos/tot*100):0;
    $('#pbar').value=pc; $('#pbar').textContent=pc+'%'; $('#pct').textContent=pc+'%';
    // painel de informações mínimas e estado dos blocos
    $('#stageBox').querySelectorAll('.bloco').forEach(el=>{
      const k=el.dataset.bl, n=(blocos[k]||[]).length, f=(marcados[k]||[]).length;
      el.classList.toggle('bloco-done', n>0&&f===n);
    });
    if(temSvc){
      const ob=blocos.obrig.length, obf=(marcados.obrig||[]).length;
      const status = obf===0?['Não iniciadas','warn'] : obf<ob?['Parcialmente preenchidas','warn'] : ['Completas','ok'];
      const linha=$('#stageBox').querySelectorAll('.panel-row')[2];
      if(linha){linha.className='panel-row '+status[1];linha.querySelector('strong').textContent=status[0]}
    }
    $('#pipe').innerHTML=pipeHTML(); ligarPipe();
  }
}
function ligarPipe(){
  document.querySelectorAll('#pipe button').forEach(b=>{b.onclick=()=>renderStage(+b.dataset.s,0)});
}
$('#pipe').innerHTML=pipeHTML(); ligarPipe();
renderStage(0,0);

// SCRIPTS
$('#scriptTabs').innerHTML=SCRIPTS.map((g,i)=>`<button class="${i===0?'active':''}" data-tab="sp${i}">${g.tab}</button>`).join('');
$('#scriptPanes').innerHTML=SCRIPTS.map((g,i)=>`
 <div class="tabpane ${i===0?'active':''}" id="sp${i}">
  ${g.items.map((it,k)=>`
   <div class="script">
     <div class="script-h"><div><h3>${it.t}</h3>${it.s?`<small>${it.s}</small>`:''}</div><button class="copy" data-g="${i}" data-i="${k}">Copiar</button></div>
     <div class="script-body">${esc(it.b)}</div>
   </div>`).join('')}
 </div>`).join('');
(function(){
  const scope=document.getElementById('scripts');
  scope.querySelectorAll('#scriptTabs button').forEach(b=>{
    b.onclick=()=>{
      scope.querySelectorAll('#scriptTabs button').forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      scope.querySelectorAll('#scriptPanes .tabpane').forEach(x=>x.classList.remove('active'));
      document.getElementById(b.dataset.tab).classList.add('active');
    };
  });
  scope.querySelectorAll('.copy').forEach(btn=>{
    btn.onclick=()=>copyText(SCRIPTS[+btn.dataset.g].items[+btn.dataset.i].b,btn);
  });
})();

// KPIs
$('#kpiCards').innerHTML=KPIS.map(k=>`
 <div class="card kpi"><h3>${k.n}</h3><div class="formula">${k.f}</div><p>${k.d}</p><div class="meta">${k.m}</div></div>`).join('');

const ids=['i1','i2','i3','i4','i5','i6','i7','i8'];
function calc(){
  const v=Object.fromEntries(ids.map(i=>[i,+document.getElementById(i).value||0]));
  const pct=(a,b)=>b>0?Math.round(a/b*100)+'%':'—';
  const money=n=>n>0?'R$ '+n.toLocaleString('pt-BR',{maximumFractionDigits:0}):'—';
  const out=[
    {v:pct(v.i2,v.i1),l:'Leads qualificados / recebidos'},
    {v:pct(v.i3,v.i2),l:'Agendamento do diagnóstico'},
    {v:pct(v.i4,v.i3),l:'Comparecimento'},
    {v:pct(v.i5,v.i4),l:'Diagnóstico vira proposta'},
    {v:pct(v.i6,v.i5),l:'Proposta vira contrato'},
    {v:pct(v.i6,v.i1),l:'Conversão total do funil'},
    {v:money(v.i6>0?Math.round(v.i7/v.i6):0),l:'Ticket médio'},
    {v:v.i6>0?Math.round(v.i8/v.i6)+' dias':'—',l:'Ciclo de venda médio'}
  ];
  $('#dashOut').innerHTML=out.map(o=>`<div><strong>${o.v}</strong><small>${o.l}</small></div>`).join('');

  // diagnóstico do funil
  const steps=[
    {n:'qualificação de leads',a:v.i2,b:v.i1},
    {n:'agendamento do diagnóstico',a:v.i3,b:v.i2},
    {n:'comparecimento no diagnóstico',a:v.i4,b:v.i3},
    {n:'envio de proposta',a:v.i5,b:v.i4},
    {n:'fechamento da proposta',a:v.i6,b:v.i5}
  ].filter(s=>s.b>0);
  if(!steps.length){$('#diag').textContent='Preencha os números da semana para ver onde o funil está travando.';return}
  const worst=steps.reduce((w,s)=>(s.a/s.b)<(w.a/w.b)?s:w);
  const r=Math.round(worst.a/worst.b*100);
  $('#diag').textContent=`Gargalo da semana: ${worst.n}, com ${r}% de passagem. É onde vale concentrar a conversa da reunião comercial.`;
}
ids.forEach(i=>document.getElementById(i).addEventListener('input',calc));
calc();

// ARQUIVOS
$('#files').innerHTML=FILES.map(f=>`
 <div class="card file"><div class="ic">${f.i}</div><div><h3>${f.t}</h3><p>${f.d}</p><span class="fill">${f.l}</span></div></div>`).join('');
