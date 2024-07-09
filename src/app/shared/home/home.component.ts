import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, CommonModule, TitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
