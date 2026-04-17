// ============================================================
// CONFIG_DEMO.JS — Versão de Demonstração
// Simula um usuário já logado para captura de screenshots
// ============================================================

let usuarioAtual = { email: 'demo@flumap.com' };

// Inicializa app direto (sem Firebase)
function inicializarDemo() {
  console.log('Modo demonstração ativado');
  document.getElementById('login-container').style.display = 'none';
  document.getElementById('app-container').style.display = 'flex';
  document.getElementById('user-email').textContent = usuarioAtual.email;
  document.getElementById('user-email').style.cursor = 'default';

  // Carrega dados de teste
  init();
  render('painel');
}

// Sobrescreve funções de autenticação
function fazerLogin() {
  inicializarDemo();
}

function fazerLogout() {
  alert('Modo demonstração - logout desativado');
}

function salvarNoFirebase() {
  console.log('Modo demo - não salva em Firebase');
  localStorage.setItem('flumap_v2', JSON.stringify(DB));
}

function carregarDadosDoFirebase() {
  // Carrega dados de teste (ja estao em app-dados.js)
}

// Auto-login após 1 segundo
setTimeout(() => {
  if (!usuarioAtual || document.getElementById('app-container').style.display === 'none') {
    inicializarDemo();
  }
}, 1000);
