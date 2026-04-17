# 🚀 Deploy Sua Empresa no Vercel + GitHub

## 📍 Situação Atual
✅ Arquivos locais já estão em um repositório Git  
✅ Pronto para enviar para GitHub  
✅ Depois conectar no Vercel

---

## 🎯 Próximas Etapas (5 Passos - 10 minutos)

### **PASSO 1: Criar Repositório no GitHub**

1. Abra: https://github.com/new
2. Faça login com sua conta Google (ou GitHub se tiver)
3. **Preencha:**
   - Repository name: `sua-empresa` (ou o nome que quiser)
   - Description: `Sistema de Gestão Financeira`
   - Selecione: **Public** (para Vercel funcionar bem)
4. Clique: **Create repository**

**Você verá uma tela com instruções - continue no Passo 2**

---

### **PASSO 2: Fazer Push dos Arquivos para GitHub**

Abra **PowerShell** e execute estes comandos (um por um):

```bash
# 1. Entre na pasta do projeto
cd "C:\Users\Tatiana\Desktop\Claude Code\FLUMAP\Template - Copia"

# 2. Adicione o repositório remoto (COPIE A URL DO GITHUB)
# Substitua SEU_USUARIO e seu-repositorio pelos valores reais:
git remote add origin https://github.com/SEU_USUARIO/sua-empresa.git

# 3. Renomeie a branch (GitHub usa 'main' por padrão agora)
git branch -M main

# 4. Faça push (envie os arquivos para GitHub)
git push -u origin main
```

**Pronto! Seus arquivos estão no GitHub** ✅

---

### **PASSO 3: Conectar GitHub ao Vercel**

1. Abra: https://vercel.com
2. Clique: **Sign Up** (ou Log In se já tem conta)
3. **Clique em: "Continue with Google"** (já que você tem conta Google)
4. Autorize o acesso
5. Na página inicial do Vercel, clique: **New Project**

---

### **PASSO 4: Selecionar o Repositório**

1. Vercel vai perguntar: "Where is your code?"
2. Clique: **Import Git Repository**
3. Cole a URL do seu repositório GitHub:
   ```
   https://github.com/SEU_USUARIO/sua-empresa
   ```
4. Clique: **Continue**
5. Autorize Vercel a acessar seu GitHub (se pedir)

---

### **PASSO 5: Configurar Deploy**

**Você verá uma tela de configuração:**

| Campo | Valor |
|-------|-------|
| **Project Name** | sua-empresa |
| **Framework Preset** | Other (é um site estático) |
| **Root Directory** | ./ (deixe em branco) |
| **Build Command** | (deixe vazio) |
| **Output Directory** | (deixe vazio) |
| **Environment Variables** | (não precisa) |

Clique: **Deploy** 🎉

---

## ✨ Pronto!

Depois de uns 30 segundos, você verá:

```
✅ Deployment Successful!
🌐 Your live URL: https://sua-empresa.vercel.app
```

**Seu sistema está no ar!** 🚀

---

## 📋 Resumo de URLs

| O que | URL |
|------|-----|
| Sistema ao vivo | https://sua-empresa.vercel.app |
| GitHub | https://github.com/SEU_USUARIO/sua-empresa |
| Vercel Dashboard | https://vercel.com/dashboard |

---

## 🔄 Próximas Atualizações (Automáticas!)

De agora em diante:

1. Você edita os arquivos locais
2. Faz `git add .` e `git commit -m "mensagem"`
3. Faz `git push`
4. **Vercel detecta a mudança e faz deploy automaticamente** ✅

Não precisa fazer nada! É automático.

---

## ⚙️ Configurações Importantes (Opcional)

Se quiser um **domínio próprio**:

1. Vá em: https://vercel.com/dashboard
2. Clique no seu projeto (sua-empresa)
3. Vá em: **Settings → Domains**
4. Clique: **Add Domain**
5. Coloque seu domínio personalizado

(Você precisa registrar um domínio em um site como Namecheap, GoDaddy, etc)

---

## 🆘 Se Der Erro

### Erro: "Build failed"
- Verifique se todos os arquivos estão no repositório
- Verifique se o `index.html` está na raiz

### Erro: "Not authorized"
- Faça login no GitHub novamente
- Autorize Vercel a acessar seu repositório

### Erro ao fazer push
```bash
# Use este comando para forçar (cuidado!)
git push -u origin main --force
```

---

## 📞 Pronto?

Siga estes 5 passos e em 10 minutos seu sistema está no ar!

Se tiver dúvida em algum passo, me fala que eu te ajudo. 😊

---

## 🎯 Checklist Final

- [ ] 1. Repositório GitHub criado
- [ ] 2. Arquivos enviados via `git push`
- [ ] 3. Vercel conectado ao GitHub
- [ ] 4. Deploy realizado com sucesso
- [ ] 5. URL live funcionando (https://sua-empresa.vercel.app)
- [ ] 6. Todos os dados aparecem na dashboard

**Pronto para ir ao ar!** 🚀

