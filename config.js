// ============================================================
// CONFIG.JS — TEMPLATE FLUMAP
// Preencha as credenciais do seu projeto Firebase aqui
// ============================================================
// PASSO 1: Crie um projeto em https://console.firebase.google.com
// PASSO 2: Vá em Configurações do Projeto > Seus apps > SDK
// PASSO 3: Copie as credenciais abaixo

const firebaseConfig = {
  apiKey:            "COLE_AQUI_A_API_KEY",
  authDomain:        "COLE_AQUI.firebaseapp.com",
  projectId:         "COLE_AQUI_O_PROJECT_ID",
  storageBucket:     "COLE_AQUI.appspot.com",
  messagingSenderId: "COLE_AQUI_O_MESSAGING_SENDER_ID",
  appId:             "COLE_AQUI_O_APP_ID"
};

// ============================================================
// IDENTIFICADOR DO DOCUMENTO — mude se quiser separar dados
// dentro do mesmo Firebase (ex: 'empresa1', 'empresa2')
// ============================================================
const DOC_ID = 'dados-empresa'; // <- altere aqui

// ============================================================
// NÃO ALTERE ABAIXO DESTA LINHA
// ============================================================
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db   = firebase.firestore();

let usuarioAtual = null;

// ============================================================
// MODO DEMO - LOGIN SEM VALIDAÇÃO (qualquer pessoa entra)
// Descomente a seção Firebase abaixo para ativar autenticação real
// ============================================================

function fazerLogin() {
  const email = document.getElementById('email-input').value || 'usuario@demo.com';
  const senha = document.getElementById('senha-input').value || 'demo';

  // Modo Demo: aceita qualquer coisa (ou nada!)
  usuarioAtual = { email: email };
  mostrarApp(email);
}

function mostrarApp(email) {
  document.getElementById('login-container').style.display = 'none';
  document.getElementById('app-container').style.display  = 'flex';
  document.getElementById('user-email').textContent = email;
  init();
}

// Modo Demo: mostra tela de login (sem validação)
// Usuário pode clicar "Entrar" com qualquer valor ou deixar em branco

/* DESCOMENTE ISTO para ativar Firebase autenticação real
auth.onAuthStateChanged((user) => {
  usuarioAtual = user;
  if (user) {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('app-container').style.display  = 'flex';
    document.getElementById('user-email').textContent = user.email;
    carregarDadosDoFirebase();
  } else {
    document.getElementById('login-container').style.display = 'flex';
    document.getElementById('app-container').style.display  = 'none';
  }
});

function fazerLogin() {
  const email = document.getElementById('email-input').value;
  const senha = document.getElementById('senha-input').value;
  if (!email || !senha) { alert('Preencha email e senha!'); return; }
  auth.signInWithEmailAndPassword(email, senha)
    .catch(() => alert('Email ou senha incorretos!'));
}
*/

function fazerLogout() {
  if (confirm('Tem certeza que deseja sair?')) {
    usuarioAtual = null;
    document.getElementById('login-container').style.display = 'flex';
    document.getElementById('app-container').style.display  = 'none';
    document.getElementById('email-input').value = '';
    document.getElementById('senha-input').value = '';
  }
}

function salvarNoFirebase() {
  // Modo Demo: salva apenas no localStorage
  localStorage.setItem('flumap_v2', JSON.stringify(DB));
  console.log('✅ Dados salvos localmente');
}

function carregarDadosDoFirebase() {
  // Modo Demo: carrega do localStorage
  const dadosSalvos = localStorage.getItem('flumap_v2');
  if (dadosSalvos) {
    try {
      DB = JSON.parse(dadosSalvos);
      console.log('✅ Dados carregados do localStorage');
    } catch (e) {
      console.log('Erro ao carregar dados salvos, usando padrão');
      init();
    }
  }
}

const saveOriginal = window.save || (() => {});
window.save = function() {
  saveOriginal();
  salvarNoFirebase();
};
