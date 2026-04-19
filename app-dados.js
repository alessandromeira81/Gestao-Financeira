// ============================================================
// APP-DADOS.JS — TEMPLATE FLUMAP
// Configure aqui os dados da sua empresa
// Este arquivo substitui as constantes do início do app.js
// ============================================================


// ------------------------------------------------------------
// 1. CATEGORIAS DE GASTO
// Adicione ou remova categorias conforme necessário
// cor: código hex da cor no gráfico
// ------------------------------------------------------------
const CATS = {
  consorcio:     { nome: 'Consórcio',    cor: '#7E57C2' },
  lance:         { nome: 'Lance',         cor: '#3949AB' },
  legal:         { nome: 'Legal',         cor: '#26A69A' },
  equipamentos:  { nome: 'Equipamentos', cor: '#FF7043' },
  infraestrutura:{ nome: 'Infra',        cor: '#FFA726' },
  sistemas:      { nome: 'TI/Sistemas',  cor: '#42A5F5' },
  combustivel:   { nome: 'Combustível',  cor: '#EF5350' },
  manutencao:    { nome: 'Manutenção',   cor: '#66BB6A' },
  motorista:     { nome: 'Motorista',    cor: '#FF9800' },
  ajudante:      { nome: 'Ajudante',     cor: '#2196F3' },
  outros:        { nome: 'Outros',       cor: '#BDBDBD' },
  // Adicione novas categorias aqui:
  // nome_interno: { nome: 'Nome Exibido', cor: '#HEXCOR' },
};


// ------------------------------------------------------------
// 2. SÓCIOS / INVESTIDORES
// id: identificador interno (sem espaços, sem acento)
// nome: nome exibido na interface
// iniciais: 2 letras para o avatar
// totalPago: DEIXE 0 — será calculado automaticamente
// ------------------------------------------------------------
const SOCIOS = [
  { id: 'socio1', nome: 'Sócio 1', iniciais: 'S1', totalPago: 0 },
  { id: 'socio2', nome: 'Sócio 2', iniciais: 'S2', totalPago: 0 },
  // Adicione mais sócios se necessário
];


// ------------------------------------------------------------
// 3. PAGAMENTOS INICIAIS
// Deixe vazio [] para começar do zero
// Ou preencha com o histórico inicial da empresa
// quem: deve ser o id de um sócio ou 'empresa'
// cat: deve ser uma chave do CATS acima
// cam: id do ativo/veículo (ou '' para empresa geral)
// tipo: 'despesa' ou 'receita'
// ------------------------------------------------------------
const PAGAMENTOS = [
  { id: 'p01', desc: 'JUCERJA', valor: 300, data: '2026-01-02', quem: 'socio2', cat: 'legal', cam: '' },
  { id: 'p02', desc: 'Consórcio', valor: 2600, data: '2026-02-09', quem: 'socio2', cat: 'consorcio', cam: '' },
  { id: 'p03', desc: 'JUCERJA', valor: 400, data: '2026-02-10', quem: 'socio1', cat: 'legal', cam: '' },
  { id: 'p04', desc: 'Alvarás', valor: 700, data: '2026-02-11', quem: 'socio1', cat: 'legal', cam: '' },
  { id: 'p05', desc: 'Lance', valor: 69600, data: '2026-02-23', quem: 'socio1', cat: 'lance', cam: '' },
  { id: 'p06', desc: 'Lance', valor: 70700, data: '2026-02-23', quem: 'socio2', cat: 'lance', cam: '' },
  { id: 'p07', desc: 'Consórcio', valor: 1100, data: '2026-03-16', quem: 'empresa', cat: 'consorcio', cam: '' },
  { id: 'p08', desc: 'ANTT', valor: 400, data: '2026-03-17', quem: 'empresa', cat: 'legal', cam: '' },
  { id: 'p09', desc: 'Certificado Digital', valor: 100, data: '2026-03-17', quem: 'empresa', cat: 'legal', cam: '' },
  { id: 'p10', desc: 'Compra domínio', valor: 100, data: '2026-03-30', quem: 'socio1', cat: 'sistemas', cam: '' },
  { id: 'p11', desc: 'Equipamentos Caminhão 1', valor: 17400, data: '2026-03-30', quem: 'socio2', cat: 'equipamentos', cam: 'ativo1' },
  { id: 'p12', desc: 'Encurtamento Eixo', valor: 1300, data: '2026-03-31', quem: 'empresa', cat: 'infraestrutura', cam: '' },
  { id: 'p13', desc: 'Combustível', valor: 100, data: '2026-04-02', quem: 'empresa', cat: 'combustivel', cam: '' },
  { id: 'p14', desc: 'Emplacamento', valor: 700, data: '2026-04-02', quem: 'empresa', cat: 'legal', cam: '' },
  { id: 'p15', desc: 'Parcela 03 consórcio', valor: 1100, data: '2026-04-10', quem: 'socio1', cat: 'consorcio', cam: '' },
  { id: 'p16', desc: 'Encurtamento Eixo', valor: 500, data: '2026-04-07', quem: 'empresa', cat: 'infraestrutura', cam: '' },
  { id: 'p17', desc: 'MYRP', valor: 100, data: '2026-04-08', quem: 'empresa', cat: 'sistemas', cam: '' },
  { id: 'p18', desc: 'iPhone', valor: 500, data: '2026-04-09', quem: 'socio1', cat: 'equipamentos', cam: '' },
  { id: 'p19', desc: 'Consórcio Caminhão 2', valor: 4900, data: '2026-04-13', quem: 'empresa', cat: 'consorcio', cam: 'ativo2' },
  { id: 'p20', desc: 'Tela Caminhão 1', valor: 300, data: '2026-04-13', quem: 'empresa', cat: 'equipamentos', cam: 'ativo1' },
  { id: 'p21', desc: 'Vacina Caminhão 1', valor: 100, data: '2026-04-13', quem: 'empresa', cat: 'manutencao', cam: 'ativo1' },
  { id: 'p22', desc: 'Vigilância Sanitária', valor: 200, data: '2026-04-13', quem: 'empresa', cat: 'legal', cam: '' }
];


// ------------------------------------------------------------
// 4. DESPESAS RECORRENTES
// Pagamentos mensais fixos (consórcio, assinaturas, etc.)
// dia: dia do vencimento (1-28)
// tol: tolerância em dias úteis para alertas
// hist: histórico de pagamentos — deixe [] para começar limpo
// ------------------------------------------------------------
const RECORRENTES = [
  {id:'r1',nome:'Consórcio Caminhão 1',cat:'consorcio',valorEsp:1100,dia:10,cam:'ativo1',tol:2,ativo:true,obs:'Parcela mensal após lance. Vence todo dia 10.',hist:[{mes:'2026-02',pago:2600,data:'2026-02-09',status:'obs'},{mes:'2026-03',pago:1100,data:'2026-03-16',status:'ok'},{mes:'2026-04',pago:1100,data:'2026-04-10',status:'ok'}]},
  {id:'r2',nome:'Consórcio Caminhão 2',cat:'consorcio',valorEsp:1100,dia:10,cam:'ativo2',tol:5,ativo:true,obs:'Lance pago em 13/abr. Parcelas mensais a iniciar.',hist:[{mes:'2026-04',pago:4900,data:'2026-04-13',status:'obs'}]},
  {id:'r3',nome:'MYRP (Sistema)',cat:'sistemas',valorEsp:100,dia:8,cam:'',tol:0,ativo:true,obs:'Sistema MYRP — gestão operacional mensal.',hist:[{mes:'2026-04',pago:100,data:'2026-04-08',status:'ok'}]}
];


// ------------------------------------------------------------
// 5. INVESTIMENTOS DOS SÓCIOS
// Aportes de capital feitos pelos sócios na empresa
// investidor: id do sócio (deve existir em SOCIOS)
// cam: id do ativo (ou '' para empresa geral)
// ------------------------------------------------------------
const INVESTIMENTOS = [
  {id:'inv01',descricao:'JUCERJA',investidor:'socio2',data:'2026-01-02',valor:300,destinado_para:'Legal',cam:'',status:'realizado',obs:''},
  {id:'inv02',descricao:'Consórcio',investidor:'socio2',data:'2026-02-09',valor:2600,destinado_para:'Consórcio',cam:'',status:'realizado',obs:''},
  {id:'inv03',descricao:'JUCERJA',investidor:'socio1',data:'2026-02-10',valor:400,destinado_para:'Legal',cam:'',status:'realizado',obs:''},
  {id:'inv04',descricao:'Alvarás',investidor:'socio1',data:'2026-02-11',valor:700,destinado_para:'Legal',cam:'',status:'realizado',obs:''},
  {id:'inv05',descricao:'Lance',investidor:'socio1',data:'2026-02-23',valor:70700,destinado_para:'Lance',cam:'',status:'realizado',obs:''},
  {id:'inv06',descricao:'Lance',investidor:'socio2',data:'2026-02-23',valor:70700,destinado_para:'Lance',cam:'',status:'realizado',obs:''},
  {id:'inv07',descricao:'Depósito Adicional Lance',investidor:'socio2',data:'2026-02-23',valor:200,destinado_para:'Aporte de Investimento',cam:'',status:'realizado',obs:''},
  {id:'inv08',descricao:'Depósito Adicional Lance',investidor:'socio1',data:'2026-02-23',valor:100,destinado_para:'Aporte de Investimento',cam:'',status:'realizado',obs:''},
  {id:'inv09',descricao:'Encontro de Contas',investidor:'socio1',data:'2026-02-25',valor:900,destinado_para:'Fluxo de Caixa',cam:'',status:'realizado',obs:''},
  {id:'inv10',descricao:'Compra domínio',investidor:'socio1',data:'2026-03-30',valor:100,destinado_para:'Sistemas',cam:'',status:'realizado',obs:''},
  {id:'inv11',descricao:'Equipamentos Caminhão 1',investidor:'socio2',data:'2026-03-30',valor:14000,destinado_para:'Caminhão 1',cam:'ativo1',status:'realizado',obs:''},
  {id:'inv12',descricao:'Equipamentos Caminhão 1',investidor:'socio1',data:'2026-03-30',valor:3500,destinado_para:'Caminhão 1',cam:'ativo1',status:'realizado',obs:''},
  {id:'inv13',descricao:'Depósito',investidor:'socio2',data:'2026-03-31',valor:2500,destinado_para:'Caminhão 1',cam:'ativo1',status:'realizado',obs:''},
  {id:'inv14',descricao:'Depósito',investidor:'socio1',data:'2026-03-31',valor:2500,destinado_para:'Caminhão 1',cam:'ativo1',status:'realizado',obs:''},
  {id:'inv15',descricao:'Parcela 03 consórcio',investidor:'socio1',data:'2026-04-10',valor:1100,destinado_para:'Consórcio',cam:'',status:'realizado',obs:''},
  {id:'inv16',descricao:'iPhone',investidor:'socio1',data:'2026-04-09',valor:500,destinado_para:'Equipamentos',cam:'',status:'realizado',obs:''},
  {id:'inv17',descricao:'Depósito Caminhão 2',investidor:'socio1',data:'2026-04-10',valor:5000,destinado_para:'Caminhão 2',cam:'ativo2',status:'realizado',obs:''},
  {id:'inv18',descricao:'Depósito Caminhão 2',investidor:'socio1',data:'2026-04-15',valor:35000,destinado_para:'Caminhão 2',cam:'ativo2',status:'realizado',obs:''},
  {id:'inv19',descricao:'Depósito Caminhão 2',investidor:'socio2',data:'2026-04-15',valor:50000,destinado_para:'Caminhão 2',cam:'ativo2',status:'realizado',obs:''},
  {id:'inv20',descricao:'Depósito Caminhão 2',investidor:'socio2',data:'2026-04-16',valor:50000,destinado_para:'Caminhão 2',cam:'ativo2',status:'realizado',obs:''}
];


// ------------------------------------------------------------
// 6. ATIVOS / VEÍCULOS (antes chamado PROJECAO)
// Configure cada ativo operacional da empresa
// Modelo financeiro mensal por unidade
// impostoPerc: percentual em decimal (ex: 6% = 0.06)
// ------------------------------------------------------------
const PROJECAO = {
  ativo1: {
    nome: 'Caminhão 1',
    modelo: 'Scania R450',
    placa: 'ABC-1D34',
    faturamentoBruto: 14000,
    impostoPerc: 0.06,
    custos: [
      { nome: 'Combustível', valor: 3445 },
      { nome: 'Custos Fixos (sócio motorista)', valor: 2440 },
      { nome: 'Custos Variáveis', valor: 1500 },
      { nome: 'Depreciação', valor: 600 }
    ]
  },
  ativo2: {
    nome: 'Caminhão 2',
    modelo: 'Volvo FH 460',
    placa: 'DEF-5E78',
    faturamentoBruto: 14000,
    impostoPerc: 0.06,
    custos: [
      { nome: 'Combustível', valor: 3445 },
      { nome: 'Motorista', valor: 1400 },
      { nome: 'Ajudante', valor: 1115 },
      { nome: 'Alimentação', valor: 390 },
      { nome: 'Passagem', valor: 143 },
      { nome: 'Seguro', valor: 500 },
      { nome: 'Flavia (adm)', valor: 150 },
      { nome: 'Custos Variáveis', valor: 1500 },
      { nome: 'Depreciação', valor: 600 }
    ]
  }
};


// ------------------------------------------------------------
// VERSÃO — altere ao fazer mudanças que exijam limpar o cache
// ------------------------------------------------------------
const VERSAO_APP = '1.0.0';
