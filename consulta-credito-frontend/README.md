# Frontend - Consulta de Créditos

Frontend Angular simples para consulta de créditos constituídos.

## Como executar

1. Instalar dependências:
```bash
npm install
```

2. Executar aplicação:
```bash
ng serve
```

3. Acessar: http://localhost:4200

## Estrutura

- `src/app/components/busca-credito/`: Componente de busca
- `src/app/components/resultados-credito/`: Componente de resultados  
- `src/app/services/credito.servico.ts`: Serviço para chamar API
- `src/app/models/credito.modelo.ts`: Interface dos dados

## Componentes

### BuscaCreditoComponent
- Radio buttons para escolher tipo de busca (NFS-e ou Crédito)
- Campo de entrada para número
- Botão de buscar
- Exibição de erros e loading

### ResultadosCreditoComponent  
- Tabela com resultados da consulta
- Formatação de valores em moeda brasileira
- Formatação de datas
- Formatação de percentuais

## Docker

```bash
docker build -t consulta-credito-frontend .
docker run -p 4200:80 consulta-credito-frontend
```

## API

Backend deve estar rodando em `http://localhost:8080/api/creditos`