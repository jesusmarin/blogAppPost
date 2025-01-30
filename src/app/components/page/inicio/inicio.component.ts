import { Component } from '@angular/core';
import { RouterOutlet,  RouterLink, RouterLinkActive, RouterModule} from '@angular/router'


@Component({
  selector: 'app-inicio',
  imports: [
    RouterLink, RouterLinkActive, RouterOutlet
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
 page: string="Inicio";
}
