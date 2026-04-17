// ============================================================
// CONFIG.JS — TEMPLATE FLUMAP
// Preencha as credenciais do seu projeto Firebase aqui
// ============================================================
// PASSO 1: Crie um projeto em https://console.firebase.google.com
// PASSO 2: Vá em Configurações do Projeto > Seus apps > SDK
// PASSO 3: Copie as credenciais abaixo

const firebaseConfig = {
  apiKey: "AIzaSyD1H1i8zLpPfIP6YBXExvmLQ_HkKHzt83w",
  authDomain: "gestao-financeira-2026.firebaseapp.com",
  projectId: "gestao-financeira-2026",
  storageBucket: "gestao-financeira-2026.firebasestorage.app",
  messagingSenderId: "285199109158",
  appId: "1:285199109158:web:291ac81ec3c361c9646ae7",
  measurementId: "G-6PYKHFK383"
};

// ============================================================
// IDENTIFICADOR DO DOCUMENTO — todos os usuários acessam a mesma base
// ============================================================
const DOC_ID = 'dados-unico'; // ID fixo para base de dados única

// ============================================================
// NÃO ALTERE ABAIXO DESTA LINHA
// ============================================================
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db   = firebase.firestore();

let usuarioAtual = null;

// ============================================================
// MODO DEMO SEM LOGIN + SINCRONIZAÇÃO COM FIREBASE
// Qualquer email/senha funciona, mas sincroniza dados entre dispositivos
// ============================================================

function fazerLogin() {
  const email = document.getElementById('email-input').value || 'usuario@demo.com';
  const senha = document.getElementById('senha-input').value || 'demo';

  // Cria usuário "fake" com o email digitado
  usuarioAtual = {
    email: email,
    uid: btoa(email) // Usa email como ID único no Firebase
  };

  mostrarApp(email);
}

function mostrarApp(email) {
  document.getElementById('login-container').style.display = 'none';
  document.getElementById('app-container').style.display  = 'flex';
  document.getElementById('user-email').textContent = email;
  carregarDadosDoFirebase();
}

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
  if (!usuarioAtual) { console.log('Usuário não autenticado'); return; }

  // Salva em uma base ÚNICA, independente do email
  db.collection('dados').doc(DOC_ID).set({
    ultima_atualizacao: new Date(),
    ultimo_usuario: usuarioAtual.email,
    dados: DB
  }).then(() => {
    console.log('✅ Dados salvos no Firebase (base única)');
    localStorage.setItem('flumap_v2', JSON.stringify(DB));
  }).catch((e) => {
    console.error('❌ Erro ao salvar no Firebase:', e.message);
    localStorage.setItem('flumap_v2', JSON.stringify(DB));
  });
}

function carregarDadosDoFirebase() {
  if (!usuarioAtual) { init(); return; }

  // Carrega da base ÚNICA, independente do email
  db.collection('dados').doc(DOC_ID).get().then((doc) => {
    if (doc.exists && doc.data().dados) {
      DB = doc.data().dados;
      console.log('✅ Dados carregados do Firebase (base única)');
    } else {
      const dadosSalvos = localStorage.getItem('flumap_v2');
      if (dadosSalvos) {
        try {
          DB = JSON.parse(dadosSalvos);
          console.log('✅ Dados carregados do localStorage');
        } catch (e) {
          console.log('Usando dados padrão');
        }
      }
    }
    init();
  }).catch((e) => {
    console.log('Erro ao carregar do Firebase, tentando localStorage...');
    const dadosSalvos = localStorage.getItem('flumap_v2');
    if (dadosSalvos) {
      try {
        DB = JSON.parse(dadosSalvos);
        console.log('✅ Dados carregados do localStorage');
      } catch (e) {
        console.log('Usando dados padrão');
      }
    }
    init();
  });
}

const saveOriginal = window.save || (() => {});
window.save = function() {
  saveOriginal();
  salvarNoFirebase();
};
