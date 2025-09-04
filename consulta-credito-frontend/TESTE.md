# Como Testar a Aplicação

## 🚀 Status da Aplicação
✅ **Servidor rodando em**: http://localhost:4200  
✅ **API simulada**: Dados de teste configurados  
✅ **Interface em português**: Todos os componentes traduzidos

## 🧪 Cenários de Teste

### 1. Busca por NFS-e
**Dados de teste disponíveis:**
- **NFS-e**: `7891011`
- **Resultado esperado**: 2 créditos encontrados

**Como testar:**
1. Selecione o radio button "NFS-e"
2. Digite: `7891011`
3. Clique em "Buscar"
4. Deve aparecer uma tabela com 2 resultados:
   - Crédito 123456 - ISSQN - R$ 1.500,75
   - Crédito 789012 - ISSQN - R$ 1.200,50

### 2. Busca por Número do Crédito
**Dados de teste disponíveis:**
- **Crédito**: `654321`
- **Resultado esperado**: 1 crédito encontrado

**Como testar:**
1. Selecione o radio button "Crédito"
2. Digite: `654321`
3. Clique em "Buscar"
4. Deve aparecer uma tabela com 1 resultado:
   - Crédito 654321 - Outros - R$ 800,50

### 3. Teste de Validação
**Como testar:**
1. Deixe o campo de busca vazio
2. O botão "Buscar" deve ficar desabilitado
3. Digite algo e o botão deve ficar habilitado

### 4. Teste de Loading
**Como testar:**
1. Digite qualquer valor
2. Clique em "Buscar"
3. Deve aparecer "Carregando..." por alguns segundos
4. Depois exibe os resultados

### 5. Teste de Erro (Dados Inexistentes)
**Como testar:**
1. Digite um valor que não existe: `999999`
2. Clique em "Buscar"
3. Deve aparecer mensagem de erro

## 🔍 O que Observar

### Interface
- [x] Título: "Consulta de Créditos"
- [x] Radio buttons: "NFS-e" e "Crédito"
- [x] Campo de input com placeholder dinâmico
- [x] Botão "Buscar" funcional
- [x] Estados de loading e erro

### Tabela de Resultados
- [x] Cabeçalho com todas as colunas em português
- [x] Formatação de moeda brasileira (R$)
- [x] Formatação de data (dd/mm/aaaa)
- [x] Formatação de percentual (%)
- [x] Contador de resultados

### Console do Navegador
- [x] Mensagens de log das chamadas simuladas
- [x] Indicadores 🟡 para chamadas interceptadas

## 📱 Teste Responsivo
A interface é básica mas funciona em diferentes tamanhos de tela.

## 🛠️ Comandos de Teste

```bash
# Parar o servidor (Ctrl+C no terminal)
# Reinstalar dependências se necessário
npm install

# Executar novamente
ng serve

# Build para produção
npm run build

# Ver arquivos gerados
ls dist/
```

## 🐛 Problemas Conhecidos
- Se o botão ficar desabilitado permanentemente, recarregue a página
- Se não aparecer resultados, verifique o console para mensagens de erro
- A API simulada só funciona com os dados específicos listados acima

## 📊 Dados Mock Disponíveis

### NFS-e: 7891011
| Crédito | Data | Valor ISSQN | Tipo | Simples Nacional |
|---------|------|-------------|------|------------------|
| 123456 | 25/02/2024 | R$ 1.500,75 | ISSQN | Sim |
| 789012 | 26/02/2024 | R$ 1.200,50 | ISSQN | Não |

### Crédito: 654321
| NFS-e | Data | Valor ISSQN | Tipo | Simples Nacional |
|-------|------|-------------|------|------------------|
| 1122334 | 15/01/2024 | R$ 800,50 | Outros | Sim |

## ✅ Checklist de Teste
- [ ] Aplicação carrega sem erros
- [ ] Radio buttons funcionam
- [ ] Campo de input aceita texto
- [ ] Botão buscar funciona
- [ ] Loading aparece durante busca
- [ ] Resultados aparecem na tabela
- [ ] Formatação de valores está correta
- [ ] Mensagens de erro funcionam
- [ ] Interface está em português
- [ ] Responsividade básica funciona