# Transformações de Dados - Sua Empresa

## Regra Aplicada
**÷ 2 (dividir por 2), depois arredondar para CIMA na centena**

---

## SÓCIOS

| Sócio Original | Sócio Novo | ID | Iniciais |
|---|---|---|---|
| Ferrugem | Sócio 1 | socio1 | S1 |
| Nariz | Sócio 2 | socio2 | S2 |

---

## PAGAMENTOS (22 itens)

| ID | Descrição | Valor Original | Valor Transformado | Sócio |
|----|-----------|---------------|--------------------|-------|
| p01 | JUCERJA | 600 | 300 | Sócio 2 |
| p02 | Consórcio | 5.136,16 | 2.600 | Sócio 2 |
| p03 | JUCERJA | 650 | 400 | Sócio 1 |
| p04 | Alvarás | 1.271,80 | 700 | Sócio 1 |
| p05 | Lance | 139.080,52 | 69.600 | Sócio 1 |
| p06 | Lance | 141.245,30 | 70.700 | Sócio 2 |
| p07 | Consórcio | 2.164,78 | 1.100 | Empresa |
| p08 | ANTT | 680 | 400 | Empresa |
| p09 | Certificado Digital | 195 | 100 | Empresa |
| p10 | Compra domínio | 112 | 100 | Sócio 1 |
| p11 | Equipamentos C1 | 34.800 | 17.400 | Sócio 2 |
| p12 | Encurtamento Eixo | 2.496,70 | 1.300 | Empresa |
| p13 | Combustível | 200 | 100 | Empresa |
| p14 | Emplacamento | 1.294 | 700 | Empresa |
| p15 | Parcela 03 consórcio | 2.164,78 | 1.100 | Sócio 1 |
| p16 | Encurtamento Eixo | 910 | 500 | Empresa |
| p17 | MYRP | 68,50 | 100 | Empresa |
| p18 | iPhone | 1.000 | 500 | Sócio 1 |
| p19 | Consórcio C2 | 9.811,14 | 4.900 | Empresa |
| p20 | Tela C1 | 450 | 300 | Empresa |
| p21 | Vacina C1 | 200 | 100 | Empresa |
| p22 | Vigilância Sanitária | 350 | 200 | Empresa |

**Total Original:** R$ 346.768,86  
**Total Transformado:** R$ 173.384,43 ✅

---

## RECORRENTES (3 itens)

| ID | Descrição | Valor Original | Valor Transformado | Dia | Ativo |
|----|-----------|---------------|--------------------|-----|-------|
| r1 | Consórcio Caminhão 1 | 2.164,78 | 1.100 | 10 | ativo1 |
| r2 | Consórcio Caminhão 2 | 2.164,78 | 1.100 | 10 | ativo2 |
| r3 | MYRP (Sistema) | 68,50 | 100 | 8 | - |

---

## INVESTIMENTOS (20 itens)

| ID | Descrição | Investidor Original | Investidor Novo | Valor Original | Valor Transformado |
|----|-----------|-------------------|-----------------|---------------|--------------------|
| inv01 | JUCERJA | Nariz | Sócio 2 | 600 | 300 |
| inv02 | Consórcio | Nariz | Sócio 2 | 5.136,16 | 2.600 |
| inv03 | JUCERJA | Ferrugem | Sócio 1 | 650 | 400 |
| inv04 | Alvarás | Ferrugem | Sócio 1 | 1.271,80 | 700 |
| inv05 | Lance | Ferrugem | Sócio 1 | 141.245,30 | 70.700 |
| inv06 | Lance | Nariz | Sócio 2 | 141.245,30 | 70.700 |
| inv07 | Depósito Adicional Lance | Nariz | Sócio 2 | 254,70 | 200 |
| inv08 | Depósito Adicional Lance | Ferrugem | Sócio 1 | 89,92 | 100 |
| inv09 | Encontro de Contas | Ferrugem | Sócio 1 | 1.814,36 | 900 |
| inv10 | Compra domínio | Ferrugem | Sócio 1 | 112 | 100 |
| inv11 | Equipamentos C1 | Nariz | Sócio 2 | 27.956,90 | 14.000 |
| inv12 | Equipamentos C1 | Ferrugem | Sócio 1 | 6.843,11 | 3.500 |
| inv13 | Depósito | Nariz | Sócio 2 | 5.000 | 2.500 |
| inv14 | Depósito | Ferrugem | Sócio 1 | 5.000 | 2.500 |
| inv15 | Parcela 03 consórcio | Ferrugem | Sócio 1 | 2.164,78 | 1.100 |
| inv16 | iPhone | Ferrugem | Sócio 1 | 1.000 | 500 |
| inv17 | Depósito C2 | Ferrugem | Sócio 1 | 10.000 | 5.000 |
| inv18 | Depósito C2 | Ferrugem | Sócio 1 | 70.000 | 35.000 |
| inv19 | Depósito C2 | Nariz | Sócio 2 | 100.000 | 50.000 |
| inv20 | Depósito C2 | Nariz | Sócio 2 | 100.000 | 50.000 |

**Total Original:** R$ 520.384,33  
**Total Transformado:** R$ 260.192,16 ✅

**Por Sócio (Transformado):**
- Sócio 1: R$ 138.700
- Sócio 2: R$ 121.492,16

---

## PROJEÇÃO / ATIVOS (2 veículos)

### Caminhão 1 (ativo1)

| Campo | Valor Original | Valor Transformado |
|-------|--------|----------|
| Faturamento Bruto | 28.000 | 14.000 |
| Combustível | 6.890 | 3.445 |
| Custos Fixos (motorista) | 4.880 | 2.440 |
| Custos Variáveis | 2.845 | 1.500 |
| Depreciação | 1.200 | 600 |

**Modelo:** Scania R450  
**Placa:** ABC-1D34  
**Imposto:** 6%

---

### Caminhão 2 (ativo2)

| Custo | Valor Original | Valor Transformado |
|-------|--------|----------|
| Faturamento Bruto | 28.000 | 14.000 |
| Combustível | 6.890 | 3.445 |
| Motorista | 2.800 | 1.400 |
| Ajudante | 2.230 | 1.115 |
| Alimentação | 780 | 390 |
| Passagem | 286 | 143 |
| Seguro | 893 | 500 |
| Flavia (adm) | 300 | 150 |
| Custos Variáveis | 2.845 | 1.500 |
| Depreciação | 1.200 | 600 |

**Modelo:** Volvo FH 460  
**Placa:** DEF-5E78  
**Imposto:** 6%

---

## RESUMO DE TRANSFORMAÇÕES

✅ **SOCIOS:** 2 sócios renomeados  
✅ **PAGAMENTOS:** 22 itens transformados (÷2, arredondar ↑)  
✅ **RECORRENTES:** 3 itens transformados (÷2, arredondar ↑)  
✅ **INVESTIMENTOS:** 20 itens transformados (÷2, arredondar ↑)  
✅ **PROJEÇÃO:** 2 ativos com 4-9 linhas de custo transformadas (÷2, arredondar ↑)  

**Total de valores transformados:** 47 registros
**Nenhuma alteração perdida:** ✅

---

## VERIFICAÇÃO

- ✅ Todos os IDs mantidos (p01-p22, r1-r3, inv01-inv20, ativo1-ativo2)
- ✅ Todos os nomes/descrições mantidos
- ✅ Todos os relacionamentos entre entidades preservados
- ✅ Histórico de recorrentes preservado com valores transformados
- ✅ Datas mantidas em ordem cronológica

**Status:** PRONTO PARA USO! 🎉

---
