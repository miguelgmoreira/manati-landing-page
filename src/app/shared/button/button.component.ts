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
  buttonLabel = input<string>('ENTRAR EM CONTATO');
  type = input<'primary' | 'secondary' | 'outlined'| string>('primary');
  icon = input<string | null>(null);
  size =  input<'large' | 'medium' | 'small' | string>('small')
  fontFamily = input<string>('adumu');
  fontWeight = input<string>('normal')
}
