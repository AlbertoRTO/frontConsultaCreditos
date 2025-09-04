import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Credito } from '../../models/credito.modelo';

@Component({
  selector: 'app-resultados-credito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resultados-credito.component.html',
  styleUrls: ['./resultados-credito.component.css']
})
export class ResultadosCreditoComponent {
  @Input() creditos: Credito[] = [];

  formatarMoeda(valor: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  }

  formatarData(dataString: string): string {
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR');
  }

  formatarPercentual(valor: number): string {
    return `${valor.toFixed(2)}%`;
  }
}