import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  buttonLabel = input<string>('Entrar em contato');
  type = input<'primary' | 'secondary' | 'outlined'| string>('primary');
  hasIcon = input<boolean>(false);
  size =  input<'large' | 'medium' | 'small' | string>('small')
}
