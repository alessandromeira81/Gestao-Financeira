@echo off
REM Script para fazer push dos arquivos para GitHub
REM Salve este arquivo como: push-para-github.bat

echo.
echo =====================================================
echo   SUA EMPRESA - Push para GitHub
echo =====================================================
echo.

REM Pedir informações
set /p USUARIO="Digite seu usuario do GitHub (ex: seu-usuario): "
set /p REPO="Digite o nome do repositorio (ex: sua-empresa): "

echo.
echo Preparando para fazer push...
echo.

REM Adicionar remote
echo [1/4] Adicionando repositorio remoto...
git remote remove origin 2>nul
git remote add origin https://github.com/%USUARIO%/%REPO%.git

REM Renomear branch
echo [2/4] Renomeando branch para main...
git branch -M main

REM Adicionar arquivos
echo [3/4] Adicionando arquivos...
git add .

REM Commit
echo [4/4] Fazendo commit...
git commit -m "Deploy: Sua Empresa v1.0.0"

REM Push
echo.
echo Enviando para GitHub (pode pedir sua senha)...
echo.
git push -u origin main

echo.
echo =====================================================
if %ERRORLEVEL% EQU 0 (
    echo   ✅ SUCESSO! Arquivos enviados para GitHub
    echo.
    echo   Acesse: https://github.com/%USUARIO%/%REPO%
    echo   Proximo passo: Conectar Vercel ao GitHub
) else (
    echo   ❌ ERRO! Verifique as informacoes acima
    echo.
    echo   Dicas:
    echo   - Verifique usuario e repositorio
    echo   - Verifique se tem acesso ao repositorio
    echo   - Pode precisar de token de autenticacao
)
echo.
echo =====================================================
echo.
pause
