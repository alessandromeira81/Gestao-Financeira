# ✅ Checklist - Deploy Sua Empresa

Use este checklist para acompanhar seu progresso até colocar o site no ar!

---

## 📍 PRÉ-REQUISITOS

- [ ] Tenho acesso a este PC (você está nele agora ✓)
- [ ] Tenho conta Google (para Vercel)
- [ ] Tenho acesso a https://github.com (ou vou criar conta)
- [ ] Git está instalado no PC
  ```powershell
  # Teste no PowerShell:
  git --version
  # Deve mostrar: git version X.X.X
  ```

---

## 🎯 FASE 1: PREPARAÇÃO (HOJE)

### Arquivos Locais
- [x] Arquivos em: `C:\Users\Tatiana\Desktop\Claude Code\FLUMAP\Template - Copia\`
- [x] Repositório Git inicializado localmente
- [x] Arquivos já estão commitados
- [ ] Documentação lida (este arquivo)

### Contas Necessárias
- [ ] Conta no GitHub criada (https://github.com)
- [ ] Acesso ao GitHub funcionando
- [ ] Conta Google para Vercel (pode ser a mesma do GitHub)
- [ ] Acesso a Vercel (https://vercel.com)

---

## 🔄 FASE 2: CRIAR REPOSITÓRIO NO GITHUB

**Tempo estimado:** 2 minutos

- [ ] Abrir https://github.com/new
- [ ] Preencher:
  - [x] Nome: `sua-empresa`
  - [x] Descrição: `Sistema de Gestão Financeira`
  - [ ] Visibilidade: `Public` ⭕ (IMPORTANTE!)
- [ ] Clicar: `Create repository`
- [ ] ✅ Repositório criado em: `https://github.com/SEU_USUARIO/sua-empresa`

---

## 📤 FASE 3: FAZER PUSH PARA GITHUB

**Tempo estimado:** 3 minutos

### Abrir PowerShell
- [ ] Clique em: Windows (canto inferior)
- [ ] Digite: PowerShell
- [ ] Clique em: Windows PowerShell

### Executar Comandos
- [ ] Copiar e colar na ordem:

```powershell
# 1. Entrar na pasta do projeto
cd "C:\Users\Tatiana\Desktop\Claude Code\FLUMAP\Template - Copia"

# 2. Adicionar GitHub como "remote"
# SUBSTITUA SEU_USUARIO pelo seu nome de usuário do GitHub!
git remote add origin https://github.com/SEU_USUARIO/sua-empresa.git

# 3. Renomear a branch
git branch -M main

# 4. Fazer push (enviar para GitHub)
git push -u origin main
```

### Validar
- [ ] PowerShell mostrou mensagens de sucesso
- [ ] Não apareceu erro vermelho
- [ ] Arquivos aparecem em: `https://github.com/SEU_USUARIO/sua-empresa`

#### Se der erro de autenticação:
- [ ] Gerar Personal Access Token:
  1. Vá em: https://github.com/settings/tokens
  2. Clique: `Generate new token`
  3. Permissões: Marque `repo`
  4. Copie o token
  5. Na hora de pedir senha, cole o token

---

## ☁️ FASE 4: CONECTAR VERCEL

**Tempo estimado:** 3 minutos

### Fazer Login no Vercel
- [ ] Abrir: https://vercel.com
- [ ] Clique: `Sign Up` (ou `Log In`)
- [ ] Escolha: `Continue with Google`
- [ ] Autorizar acesso (botão azul)
- [ ] ✅ Logado no Vercel

### Criar Novo Projeto
- [ ] Dashboard do Vercel aberto
- [ ] Clique: `+ New Project`
- [ ] Clique: `Import Git Repository`

### Conectar Repositório GitHub
- [ ] Procure por: `sua-empresa`
- [ ] Clique: `Select` ou `Import`

#### Se não aparecer o repositório:
- [ ] Volte (← botão voltar)
- [ ] Clique: `Configure GitHub App`
- [ ] Autorize Vercel a acessar seus repositórios
- [ ] Tente novamente

### Configurar Deploy
- [ ] Tela de configuração aparece
- [ ] Deixe tudo padrão (não mude nada)
- [ ] Clique: `Deploy` (botão azul)

---

## 🚀 FASE 5: AGUARDAR DEPLOY

**Tempo estimado:** 1-2 minutos

- [ ] Vercel mostra "Building..." com barra de progresso
- [ ] Aguarde até aparecer: ✅ `Deployment Successful!`
- [ ] Copie o link: `https://sua-empresa.vercel.app`

---

## 🌐 FASE 6: TESTAR O SITE AO VIVO

**Tempo estimado:** 2 minutos

### Acessar o Site
- [ ] Abra no navegador: `https://sua-empresa.vercel.app`
- [ ] Aguarde carregar (pode demorar 10-30 segundos)

### Verificar Interface
- [ ] ✅ Vejo "Sua Empresa" no título
- [ ] ✅ Vejo logo "SE" em azul-verde
- [ ] ✅ Vejo subtítulo "Gestão Financeira"
- [ ] ✅ Página carrega sem erros

### Testar Funcionalidades
- [ ] Clique em **demo.html** (se quiser ver sem login)
- [ ] OU faça login (qualquer email/senha para teste)
- [ ] ✅ Vejo o Dashboard
- [ ] ✅ Clique em abas (Painel, Investimentos, etc)
- [ ] ✅ Dados aparecem (Sócios, pagamentos, etc)

### Compartilhar
- [ ] ✅ Site está funcionando!
- [ ] Compartilhe o link: `https://sua-empresa.vercel.app`
- [ ] Teste em outro PC/celular (deve funcionar igual)

---

## 📊 RESUMO DE URLS

```
GitHub:    https://github.com/SEU_USUARIO/sua-empresa
Vercel:    https://vercel.com/dashboard
Site Ao Vivo: https://sua-empresa.vercel.app
```

---

## 🔄 PRÓXIMAS ATUALIZAÇÕES (AUTOMÁTICAS)

Quando quiser atualizar o site depois:

```powershell
cd "C:\Users\Tatiana\Desktop\Claude Code\FLUMAP\Template - Copia"

# Edite um arquivo (ex: app-dados.js)
# Salve

# Depois:
git add .
git commit -m "Sua descrição da mudança"
git push

# Vercel detecta e faz deploy automático (~30s)
# Site está atualizado!
```

- [ ] Entendi que futuras atualizações são automáticas

---

## 🎉 FASE FINAL: CELEBRAÇÃO

- [ ] Seu site está na web! 🚀
- [ ] Funciona em qualquer lugar com internet
- [ ] Dados de Sua Empresa carregam corretamente
- [ ] Você consegue acessar via: `https://sua-empresa.vercel.app`

---

## 📞 SUPORTE

### Se algo der errado:
- [ ] Reread GUIA_PASSO_A_PASSO.md (seção Troubleshooting)
- [ ] Verifique erros em: https://vercel.com/dashboard
- [ ] Clique em seu projeto → Deployments → últimas tentativas

### Erros Comuns:
- **"Build failed"** → Arquivo JavaScript com erro (verifique sintaxe)
- **"Repository not found"** → Repositório é privado (mude para público)
- **"Autorização negada"** → Use Personal Access Token
- **Site mostra 404** → Verifique se index.html está na raiz

---

## 💯 RESULTADO FINAL

```
✅ Seu sistema "Sua Empresa" está na web!
✅ Dados transformados (÷2) carregam corretamente
✅ Interface "SE" funcionando
✅ Acesso: https://sua-empresa.vercel.app
✅ Deploy automático para próximas atualizações
✅ Backup no GitHub
```

---

## 🎯 Meta

```
ANTES:                    DEPOIS:
📂 Arquivos locais    →   🌐 https://sua-empresa.vercel.app
PC apenas             →   Acessível em qualquer lugar
Dados limitados       →   Escala infinita com Vercel
```

---

**Parabéns! Você subiu seu primeiro site para a web!** 🎉

Data: _________________  
Status: ☐ Completo

---
