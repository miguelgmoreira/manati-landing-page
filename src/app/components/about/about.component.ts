import { Component } from '@angular/core';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { TitleComponent } from '../../shared/title/title.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TitleComponent, CarouselComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  images = [
    {
      imageSrc: '../../../assets/bar-manati.jpg',
      imageAlt: 'Bar'
    },
    {
      imageSrc: '../../../assets/buffet-manati.jpg',
      imageAlt: 'Buffet'
    },
    {
      imageSrc: '../../../assets/banheiro-manati.jpg',
      imageAlt: 'Banheiro'
    },
    {
      imageSrc: '../../../assets/banheiro-manati-2.jpg',
      imageAlt: 'Banheiro 2'
    },
    {
      imageSrc: '../../../assets/bar-area-lateral-manati.jpg',
      imageAlt: 'Bar'
    },
    {
      imageSrc: '../../../assets/brinquedoteca-manati.jpg',
      imageAlt: 'Brinquedoteca'
    },
    {
      imageSrc: '../../../assets/interior-manati.jpg',
      imageAlt: 'Interior'
    },
  ]
}
