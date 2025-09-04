import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credito } from '../models/credito.modelo';

@Injectable({
  providedIn: 'root'
})
export class CreditoServico {
  private urlApi = 'http://localhost:8080/api/creditos';

  constructor(private http: HttpClient) {}

  consultarPorNfse(numeroNfse: string): Observable<Credito[]> {
    return this.http.get<Credito[]>(`${this.urlApi}/${numeroNfse}`);
  }

  consultarPorCredito(numeroCredito: string): Observable<Credito> {
    return this.http.get<Credito>(`${this.urlApi}/credito/${numeroCredito}`);
  }
}