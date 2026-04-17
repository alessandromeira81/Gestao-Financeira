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
// FIREBASE AUTENTICAÇÃO ATIVA
// Sincronização com Firestore em tempo real
// ============================================================

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
    .catch((erro) => {
      if (erro.code === 'auth/user-not-found' || erro.code === 'auth/wrong-password') {
        // Oferecer criar conta se não existir
        if (confirm('Conta não encontrada. Deseja criar uma nova conta?')) {
          auth.createUserWithEmailAndPassword(email, senha)
            .catch(err => alert('❌ Erro ao criar conta: ' + err.message));
        }
      } else {
        alert('❌ Erro: ' + erro.message);
      }
    });
}

function fazerLogout() {
  if (confirm('Tem certeza que deseja sair?')) {
    auth.signOut().catch(err => alert('Erro ao sair: ' + err.message));
  }
}

function salvarNoFirebase() {
  if (!usuarioAtual) { console.log('Usuário não autenticado'); return; }

  db.collection('usuarios').doc(usuarioAtual.uid).set({
    email: usuarioAtual.email,
    ultima_atualizacao: new Date(),
    dados: DB
  }).then(() => {
    console.log('✅ Dados salvos no Firebase');
    // Também salva no localStorage como backup
    localStorage.setItem('flumap_v2', JSON.stringify(DB));
  }).catch((e) => {
    console.error('❌ Erro ao salvar no Firebase:', e.message);
    // Salva apenas no localStorage se Firebase falhar
    localStorage.setItem('flumap_v2', JSON.stringify(DB));
  });
}

function carregarDadosDoFirebase() {
  if (!usuarioAtual) { init(); return; }

  db.collection('usuarios').doc(usuarioAtual.uid).get().then((doc) => {
    if (doc.exists && doc.data().dados) {
      DB = doc.data().dados;
      console.log('✅ Dados carregados do Firebase');
    } else {
      // Se não tiver dados no Firebase, carrega do localStorage
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
