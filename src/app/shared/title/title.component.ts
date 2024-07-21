import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {
  title = input<string>();
  cor = input<'preto' | 'amarelo'>();
  font = input<'montserrat' | 'adumu' | 'satoshi'>('adumu');
  fontWeight = input<'normal' | 'bold' | string>()
}
