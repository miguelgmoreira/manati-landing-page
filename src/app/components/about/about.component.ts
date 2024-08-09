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
      imageSrc: '../../../assets/manati-amante.jpg',
      imageAlt: 'Amante'
    },
    {
      imageSrc: '../../../assets/manati-coxinha.jpg',
      imageAlt: 'Coxinha'
    },
    {
      imageSrc: '../../../assets/manati-picadinho.jpg',
      imageAlt: 'Picadinho'
    },
    {
      imageSrc: '../../../assets/manati-isca.jpg',
      imageAlt: 'Isca 1'
    },
    {
      imageSrc: '../../../assets/Manati-drink.jpg',
      imageAlt: 'Buffet'
    },
    {
      imageSrc: '../../../assets/manati-tilapia.jpg',
      imageAlt: 'Tilapia'
    },
    {
      imageSrc: '../../../assets/manati-sobremesa-redvelvet.jpg',
      imageAlt: 'Sobremesa manati morango'
    },
  ]


}
