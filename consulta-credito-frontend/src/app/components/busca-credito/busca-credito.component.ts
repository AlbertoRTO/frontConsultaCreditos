import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreditoServico } from '../../services/credito.servico';
import { Credito } from '../../models/credito.modelo';
import { ResultadosCreditoComponent } from '../resultados-credito/resultados-credito.component';

@Component({
  selector: 'app-busca-credito',
  standalone: true,
  imports: [CommonModule, FormsModule, ResultadosCreditoComponent],
  templateUrl: './busca-credito.component.html',
  styleUrls: ['./busca-credito.component.css']
})
export class BuscaCreditoComponent {
  tipoBusca: 'nfse' | 'credito' = 'nfse';
  valorBusca = '';
  carregando = false;
  creditos: Credito[] = [];
  erro = '';

  constructor(private creditoServico: CreditoServico) {}

  buscar(): void {
    this.carregando = true;
    this.erro = '';
    this.creditos = [];

    if (this.tipoBusca === 'nfse') {
      this.creditoServico.consultarPorNfse(this.valorBusca).subscribe({
        next: (creditos) => {
          this.creditos = creditos;
          this.carregando = false;
        },
        error: () => {
          this.erro = 'Erro na consulta';
          this.carregando = false;
        }
      });
    } else {
      this.creditoServico.consultarPorCredito(this.valorBusca).subscribe({
        next: (credito) => {
          this.creditos = [credito];
          this.carregando = false;
        },
        error: () => {
          this.erro = 'Crédito não encontrado';
          this.carregando = false;
        }
      });
    }
  }
}