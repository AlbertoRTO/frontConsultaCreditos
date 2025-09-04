import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of, delay } from 'rxjs';

export const mockApiInterceptor: HttpInterceptorFn = (req, next) => {
  const { url, method } = req;

  // Simular dados de teste
  const dadosCredito = [
    {
      numeroCredito: "123456",
      numeroNfse: "7891011",
      dataConstituicao: "2024-02-25",
      valorIssqn: 1500.75,
      tipoCredito: "ISSQN",
      simplesNacional: "Sim",
      aliquota: 5.0,
      valorFaturado: 30000.00,
      valorDeducao: 5000.00,
      baseCalculo: 25000.00
    },
    {
      numeroCredito: "789012",
      numeroNfse: "7891011",
      dataConstituicao: "2024-02-26",
      valorIssqn: 1200.50,
      tipoCredito: "ISSQN",
      simplesNacional: "Não",
      aliquota: 4.5,
      valorFaturado: 25000.00,
      valorDeducao: 4000.00,
      baseCalculo: 21000.00
    }
  ];

  const creditoUnico = {
    numeroCredito: "654321",
    numeroNfse: "1122334",
    dataConstituicao: "2024-01-15",
    valorIssqn: 800.50,
    tipoCredito: "Outros",
    simplesNacional: "Sim",
    aliquota: 3.5,
    valorFaturado: 20000.00,
    valorDeducao: 3000.00,
    baseCalculo: 17000.00
  };

  // Interceptar chamadas para API local
  if (url.includes('localhost:8080/api/creditos')) {
    
    // Simular consulta por NFS-e
    if (method === 'GET' && url.includes('/api/creditos/') && !url.includes('/credito/')) {
      console.log('🟡 Simulando consulta por NFS-e:', url);
      return of(new HttpResponse({
        status: 200,
        body: dadosCredito
      })).pipe(delay(500)); // Simular delay da rede
    }

    // Simular consulta por número do crédito
    if (method === 'GET' && url.includes('/credito/')) {
      console.log('🟡 Simulando consulta por crédito:', url);
      return of(new HttpResponse({
        status: 200,
        body: creditoUnico
      })).pipe(delay(500)); // Simular delay da rede
    }
  }

  // Se não for uma chamada da API simulada, prosseguir normalmente
  return next(req);
};