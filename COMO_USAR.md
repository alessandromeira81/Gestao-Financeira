# 📋 Guia de Uso — Template FLUMAP

Este é um **template limpo** do sistema FLUMAP, pronto para ser duplicado e configurado para uma nova empresa/projeto.

---

## 1️⃣ Estrutura de Arquivos

```
Template/
├── index.html           # Interface HTML (não editar)
├── app.js              # Lógica da aplicação (não editar)
├── app-dados.js        # 📝 EDITAR AQUI — dados da empresa
├── config.js           # 📝 EDITAR AQUI — configuração Firebase
├── styles.css          # CSS (não editar)
├── sw.js               # Service Worker (não editar)
├── manifest.json       # PWA manifest (não editar)
└── COMO_USAR.md        # Este arquivo
```

---

## 2️⃣ Passo 1: Configurar `app-dados.js`

Este arquivo contém **todos os dados configuráveis** da empresa. Abra e edite:

### ✏️ CATS (Categorias de Gastos)
```javascript
const CATS = {
  consorcio: { nome: 'Consórcio', cor: '#7E57C2' },
  // Adicione ou edite as categorias conforme necessário
};
```

### ✏️ SOCIOS (Sócios/Donos)
```javascript
const SOCIOS = [
  { id: 'socio1', nome: 'João Silva', iniciais: 'JS', totalPago: 0 },
  { id: 'socio2', nome: 'Maria Santos', iniciais: 'MS', totalPago: 0 },
  // Adicione quantos sócios forem necessários
];
```

### ✏️ PAGAMENTOS, RECORRENTES, INVESTIMENTOS
Deixe como arrays vazios `[]` no início. Os dados serão preenchidos conforme o sistema é utilizado.

### ✏️ PROJECAO (Ativos — Caminhões, Máquinas, etc)
```javascript
const PROJECAO = {
  ativo1: {
    nome: 'Caminhão 1',
    modelo: 'Scania...',
    placa: 'ABC-1234',
    faturamentoBruto: 28000,
    impostoPerc: 0.06,
    custos: [
      { nome: 'Combustível', valor: 6890 },
      // ...
    ]
  },
  // Adicione mais ativos conforme necessário
};
```

### ✏️ VERSAO_APP
```javascript
const VERSAO_APP = '1.0-template';
```

---

## 3️⃣ Passo 2: Configurar Firebase (`config.js`)

### Criar um novo projeto Firebase:
1. Acesse [console.firebase.google.com](https://console.firebase.google.com)
2. Clique em "Adicionar projeto"
3. Preencha o nome do projeto (ex: "Financeiro-Empresa-XYZ")
4. Aceite os termos e crie

### Ativar Autenticação:
1. No console Firebase, vá para "Autenticação" (à esquerda)
2. Clique em "Começar"
3. Selecione "Email/Senha"
4. Ative apenas "Email/Senha"

### Criar um usuário de teste:
1. Na aba "Usuários", clique "Adicionar usuário"
2. Email: seu@email.com
3. Senha: uma senha segura
4. Salve

### Copiar credenciais:
1. Vá para "Visão geral do projeto"
2. Clique em "</>" para adicionar um app web
3. Cópia o objeto `firebaseConfig`
4. Cole em `config.js`:

```javascript
const firebaseConfig = {
  apiKey: "SUA_API_KEY_AQUI",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "12345...",
  appId: "1:12345..."
};
```

### Criar Firestore (Banco de Dados):
1. No console Firebase, vá para "Firestore Database"
2. Clique "Criar banco de dados"
3. Selecione "Iniciar no modo de produção"
4. Escolha uma região próxima (ex: `us-east1`)
5. Crie

### Configurar Regras do Firestore:
Na aba "Regras", substitua pelo código abaixo (permite leitura/escrita apenas para usuários autenticados):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

Clique "Publicar"

### Preencher DOC_ID no config.js:
```javascript
const DOC_ID = 'dados-empresa-xyz'; // Mude o nome conforme necessário
```

---

## 4️⃣ Passo 3: Duplicar para um novo repositório (Opcional)

Se quiser versionamento no Git + deploy automático:

### No GitHub:
1. Crie um novo repositório (ex: `financeiro-empresa-xyz`)
2. Deixe público ou privado conforme necessário

### Localmente:
```bash
# Clone esta template para um novo diretório
cp -r Template /seu/caminho/novo-projeto
cd novo-projeto

# Inicie um novo repositório Git
git init
git remote add origin https://github.com/seu-usuario/financeiro-empresa-xyz.git
git add .
git commit -m "Initial commit: FLUMAP template"
git push -u origin main
```

### Deploy no Vercel (Gratuito):
1. Acesse [vercel.com](https://vercel.com)
2. Clique "Import Project"
3. Conecte seu repositório GitHub
4. Selecione o repositório `financeiro-empresa-xyz`
5. Em "Environment Variables", adicione:
   - (Opcionalmente, nenhuma necessária — o Firebase está no código)
6. Clique "Deploy"

Pronto! Seu sistema estará em produção em `seu-projeto.vercel.app`

---

## 5️⃣ Primeiro Acesso

1. Acesse o sistema (localhost ou URL do Vercel)
2. Faça login com email/senha criado no Firebase
3. A primeira aba ativa é "Painel" — mostra visão consolidada
4. Use o menu lateral (≡) para navegar pelas seções

### Seções:
- **Estratégico**: Painel, Evolutivo, Investimentos (resumo)
- **Tático**: Pagamentos, Despesas, Alertas
- **Operacional**: Lançamentos, Recorrentes, Por Ativo, Gerenciar

---

## 6️⃣ Populando Dados

### Manualmente (via interface):
- **Novo Investimento**: Botão 💰 na seção Investimentos
- **Novo Lançamento**: Seção Lançamentos → Novo Lançamento
- **Recorrentes**: Ao criar um Lançamento, marque "Marcar como Recorrente"
- **Editar Ativos**: Seção "Por Ativo" → botão "✏ Editar"

### Importar dados iniciais (avançado):
Se tiver CSV de dados históricos, você pode:
1. Editar `app-dados.js` com os arrays PAGAMENTOS, INVESTIMENTOS, RECORRENTES preenchidos
2. A próxima vez que o usuário fizer login, os dados estarão já presentes

---

## 7️⃣ Customizações Comuns

### Mudar cores do tema:
No `styles.css`, edite as variáveis CSS no topo:
```css
:root {
  --b6: #1565C0;  /* Azul primário */
  --g6: #388E3C;  /* Verde primário */
  --red: #DC2626; /* Vermelho */
  /* ... */
}
```

### Mudar nome da aplicação:
- `index.html` linha 11: `<title>...`
- `index.html` linha 23: `<h1>Gestão Financeira</h1>`
- `manifest.json` linha 2: `"name": "..."`

### Adicionar mais sócios ou ativos:
Edite `app-dados.js`:
- Adicione ao array SOCIOS
- Adicione chaves novas a PROJECAO (ex: `ativo3`, `ativo4`)

---

## 8️⃣ Troubleshooting

### "Erro de autenticação" ao fazer login:
- Verifique se criou um usuário no Firebase Autenticação
- Verifique se o `firebaseConfig` em `config.js` está correto
- Limpe cache do navegador (Ctrl+Shift+Del)

### "Dados não aparecem após login":
- Os dados são salvos em localStorage (navegador) e no Firestore (nuvem)
- Se mudar de navegador/dispositivo, terá que sincronizar via Firestore
- Verifique as Regras do Firestore — devem permitir acesso

### "Estilos quebrados":
- Certifique-se de que `styles.css` está no mesmo diretório que `index.html`
- Verifique se o caminho em `<link rel="stylesheet" href="styles.css">` é correto

### "Gráficos em branco":
- Certifique-se de que `chart.js` (CDN) carregou
- Abra o console (F12) e procure por erros de rede

---

## 9️⃣ Funcionalidades Principais

✅ **Autenticação**: Login seguro via Firebase  
✅ **Sincronização em Nuvem**: Dados salvos em Firestore  
✅ **Offline**: App funciona offline; sincroniza quando voltar online (PWA)  
✅ **Responsivo**: Mobile, tablet, desktop  
✅ **Gráficos**: Chart.js para visualização de dados  
✅ **Categorização**: Múltiplas categorias de gastos  
✅ **Sócios**: Controle de investimentos por sócio  
✅ **Recorrentes**: Alertas para pagamentos recorrentes  
✅ **Projeção**: Simulação de lucro/margem por ativo  

---

## 🔟 Suporte

Este é um template autossuficiente. Para dúvidas:

1. Verifique o console do navegador (F12 → Console) para erros
2. Revise o `config.js` e `app-dados.js`
3. Consulte a documentação do [Firebase](https://firebase.google.com/docs)

---

**Versão do Template**: 1.0  
**Data**: Abril 2026  
**Licença**: Uso livre — customize conforme necessário
