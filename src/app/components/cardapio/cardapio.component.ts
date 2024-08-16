import { Component } from '@angular/core';
import { TitleComponent } from '../../shared/title/title.component';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.scss',
})
export class CardapioComponent {
  irParaCardapio(uri: string) {
    window.open(
      `https://menu.getinapp.com.br/pt-br/EP0bEG63/menus/D6W2O31Q/categories/${uri}`,
      '_blank'
    );
  }
}
