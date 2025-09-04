import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuscaCreditoComponent } from './components/busca-credito/busca-credito.component';
import { ResultadosCreditoComponent } from './components/resultados-credito/resultados-credito.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BuscaCreditoComponent, ResultadosCreditoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Consulta de Créditos';
}
