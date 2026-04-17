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

function fazerLogout() {
  if (confirm('Tem certeza que deseja sair?')) auth.signOut();
}

function salvarNoFirebase() {
  if (!usuarioAtual) { alert('Usuário não autenticado!'); return; }
  db.collection('dados').doc(DOC_ID).set({
    ultima_atualizacao: new Date(),
    ultimo_usuario: usuarioAtual.email,
    dados: DB
  }).then(() => {
    localStorage.setItem('flumap_v2', JSON.stringify(DB));
    alert('✅ Dados salvos com sucesso!');
  }).catch((e) => alert('❌ Erro ao salvar: ' + e.message));
}

function carregarDadosDoFirebase() {
  if (!usuarioAtual) return;
  db.collection('dados').doc(DOC_ID).get().then((doc) => {
    if (doc.exists && doc.data().dados) {
      DB = doc.data().dados;
      render('painel');
    } else {
      init();
    }
  }).catch(() => init());
}

const saveOriginal = window.save || (() => {});
window.save = function() {
  saveOriginal();
  salvarNoFirebase();
};
