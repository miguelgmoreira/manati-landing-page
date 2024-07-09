import { Component } from '@angular/core';
import { TitleComponent } from '../../shared/title/title.component';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.scss'
})
export class CardapioComponent {

}
