import { Component } from '@angular/core';
import { TitleComponent } from '../../shared/title/title.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
