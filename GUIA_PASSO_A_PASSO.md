# 📖 Guia Passo-a-Passo: Deploy Sua Empresa na Web

> ⏱️ **Tempo estimado:** 10 minutos  
> 📋 **Pré-requisitos:** Conta Google (para login Vercel)  
> ✅ **Nível de dificuldade:** Muito Fácil

---

## 🎯 Objetivo Final
```
SEU PC → GITHUB → VERCEL → 🌐 https://sua-empresa.vercel.app
```

---

## 📍 PASSO 1: Criar Repositório no GitHub
**Tempo: 2 minutos**

### 1.1 Abrir página de novo repositório
```
URL: https://github.com/new
```
Ou:
- Vá para https://github.com
- Clique no **+** no canto superior direito
- Clique em **New repository**

### 1.2 Preencher as informações

```
Repository name:    sua-empresa
Description:        Sistema de Gestão Financeira
Visibility:         ⭕ Public  (importante!)
```

**Deixe tudo mais desmarcado (padrões):**
- ❌ Initialize this repository with a README
- ❌ Add .gitignore
- ❌ Add a license

### 1.3 Clicar em "Create repository"

✅ **Resultado:** Você vai ver uma tela com instruções como esta:
```
…or push an existing repository from the command line
```

---

## 📍 PASSO 2: Fazer Push (Enviar Arquivos para GitHub)
**Tempo: 3 minutos**

### 2.1 Abrir PowerShell
- Clique no **Windows** (logo no canto inferior)
- Digite: `PowerShell`
- Clique em **Windows PowerShell**

### 2.2 Entrar na pasta do projeto
```powershell
cd "C:\Users\Tatiana\Desktop\Claude Code\FLUMAP\Template - Copia"
```

Se tiver espaço no caminho, coloque entre aspas duplas `"..."` como acima.

### 2.3 Verificar se Git já está inicializado
```powershell
git status
```

**Resposta esperada:**
```
On branch master
nothing to commit, working tree clean
```

✅ Se aparecer isto, seu repositório local já existe!

### 2.4 Adicionar GitHub como "remote"

Copie esta linha e **substitua**:
- `SEU_USUARIO` → seu nome de usuário do GitHub
- `sua-empresa` → nome do repositório criado

```powershell
git remote add origin https://github.com/SEU_USUARIO/sua-empresa.git
```

**Exemplo real:**
```powershell
git remote add origin https://github.com/joao-silva/sua-empresa.git
```

### 2.5 Renomear a branch (importante para Vercel)

```powershell
git branch -M main
```

### 2.6 Fazer o push (enviar para GitHub)

```powershell
git push -u origin main
```

**Pode pedir sua senha do GitHub:**
- Se tiver ativado **2FA (autenticação em 2 fatores)**, use um **Personal Access Token** em vez de senha
  - Vá em: https://github.com/settings/tokens
  - Crie um token com permissão `repo`
  - Use o token no lugar da senha

### 2.7 Verificar se funcionou

✅ **Sucesso:** Verá algo como:
```
Enumerating objects: 15, done.
...
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

❌ **Erro:** Se pedir senha e não aceitar, gere um token (link acima)

---

## 📍 PASSO 3: Conectar Vercel ao GitHub
**Tempo: 3 minutos**

### 3.1 Abrir Vercel
```
URL: https://vercel.com
```

### 3.2 Fazer Login
Clique em **Sign Up** (ou Log In)

Escolha: **Continue with Google**

![Será pedido autorização para acessar sua conta Google - clique Permitir]

### 3.3 Voltar ao Dashboard
Após login, você está no dashboard do Vercel

Clique em: **+ New Project**

### 3.4 Conectar GitHub

Tela aparece:
```
Where is your code?
☐ Import Git Repository
```

Clique em: **Import Git Repository**

### 3.5 Buscar seu repositório

Vercel vai pedir uma URL ou mostrar lista de repos.

Se pedir URL:
```
https://github.com/SEU_USUARIO/sua-empresa
```

Se mostrar lista:
- Procure por **sua-empresa**
- Clique nele

**Se não encontrar o repositório:**
1. Volte (← botão voltar)
2. Clique em **Configure GitHub App**
3. Autorize Vercel a acessar seus repositórios
4. Tente novamente

### 3.6 Selecionar o repositório
Clique em **Select** ou **Import** no repositório `sua-empresa`

---

## 📍 PASSO 4: Configurar e Fazer Deploy
**Tempo: 2 minutos**

### 4.1 Tela de Configuração

Vercel mostra uma tela com:
```
Project Name:              sua-empresa
Framework Preset:          Other (ou deixe em branco)
Root Directory:            ./
Build Command:             (deixe vazio)
Output Directory:          (deixe vazio)
Environment Variables:     (deixe vazio)
```

**Deixe tudo como está (padrões)**

### 4.2 Clicar em "Deploy"

Clique no botão azul **Deploy**

### 4.3 Aguardar

Vercel vai:
1. Clonar seu repositório ⏳
2. Instalar dependências ⏳
3. Fazer o build ⏳
4. Deploy para os servidores ⏳

**Tempo: ~30-60 segundos**

### 4.4 Sucesso! 🎉

Você verá:
```
✅ Deployment Successful!
🌐 Your live site is available here:
   https://sua-empresa.vercel.app
```

---

## ✨ TESTANDO SEU SITE AO VIVO

### 5.1 Acessar o site

Clique no link ou abra no navegador:
```
https://sua-empresa.vercel.app
```

### 5.2 Verificar se está funcionando

Você deve ver:
- ✅ Tela de login com "Sua Empresa"
- ✅ Logo "SE" em azul-verde
- ✅ Subtítulo "Gestão Financeira"

### 5.3 Fazer login (modo demo)

Use credenciais de teste (Firebase está configurado para dev):
- **Email:** seu@email.com (qualquer email)
- **Senha:** senha123 (qualquer senha)

Ou clique em **demo.html** para versão demo (sem login)

---

## 🔄 Atualizações Futuras (Automáticas!)

### Quando você quiser atualizar o site:

1. **Editar arquivo locally** (no PC)
   ```
   Exemplo: editar app-dados.js para adicionar novo sócio
   ```

2. **No PowerShell:**
   ```powershell
   cd "C:\Users\Tatiana\Desktop\Claude Code\FLUMAP\Template - Copia"
   git add .
   git commit -m "Descrição do que mudou"
   git push
   ```

3. **Vercel detecta automaticamente**
   - Faz deploy automático
   - ~30 segundos depois, site está atualizado

4. **Pronto!**
   ```
   https://sua-empresa.vercel.app (já tem as mudanças)
   ```

---

## 📊 Verificação Final

Crie este checklist e marque enquanto progride:

```
GITHUB:
[ ] Repositório criado em https://github.com/SEU_USUARIO/sua-empresa
[ ] Arquivos enviados via git push
[ ] Pode ver os arquivos no GitHub (app-dados.js, index.html, etc)

VERCEL:
[ ] Projeto criado em https://vercel.com/dashboard
[ ] Status mostra "Ready" ou "Building"
[ ] Deploy foi bem-sucedido ✅

WEBSITE:
[ ] Acessa https://sua-empresa.vercel.app
[ ] Vê "Sua Empresa" no título
[ ] Vê logo "SE"
[ ] Interface carrega corretamente
[ ] Dados aparecem (sócios, pagamentos, etc)
```

---

## 🆘 Troubleshooting (Solução de Problemas)

### Problema: "Build failed"
**Solução:**
```
1. GitHub → Seu repositório → Settings → Actions
2. Verifique se há erros nos logs
3. Geralmente é arquivo JavaScript com erro de sintaxe
4. Corrija localmente e faça git push novamente
```

### Problema: "Repository not found"
**Solução:**
```
1. Verifique se o repositório é PUBLIC (não privado)
2. Verifique a URL: https://github.com/USUARIO/REPO
3. Pode ser erro de digitação no nome de usuário
```

### Problema: Senha do GitHub não funciona
**Solução:**
```
1. GitHub bloqueou senhas para segurança
2. Use Personal Access Token (PAT):
   - https://github.com/settings/tokens
   - Crie novo token com permissão "repo"
   - Use o token no lugar da senha
```

### Problema: Vercel pede autorização do GitHub
**Solução:**
```
1. Volte à tela anterior
2. Clique "Configure GitHub App"
3. Autorize Vercel a acessar seus repos
4. Tente novamente
```

### Problema: Site mostra erro 404
**Solução:**
```
1. Verifique se index.html está na raiz (não em subpasta)
2. Repositório precisa ser PUBLIC
3. Aguarde 30s e recarregue (F5)
```

---

## 🎉 Parabéns!

Seu sistema "Sua Empresa" está **pronto para o mundo!**

```
📍 Local:    C:\Users\...\Template - Copia\
📦 GitHub:   https://github.com/SEU_USUARIO/sua-empresa
🌐 Web:      https://sua-empresa.vercel.app
```

**Qualquer dúvida, me chama!** 😊

---
