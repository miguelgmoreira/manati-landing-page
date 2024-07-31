import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TitleComponent } from '../../shared/title/title.component';

@Component({
  selector: 'app-espaco',
  standalone: true,
  imports: [TitleComponent, CommonModule],
  templateUrl: './espaco.component.html',
  styleUrl: './espaco.component.scss'
})
export class EspacoComponent {
  images: { imageSrc: string; imageAlt: string }[] = [];

  mobileImages = [
    {
      imageSrc: '../../../assets/manati-espaco.jpg',
      imageAlt: 'Salmão'
    },
    {
      imageSrc: '../../../assets/bar-manati.jpg',
      imageAlt: 'Coxinha'
    },
    {
      imageSrc: '../../../assets/manati-espaco-lateral.jpg',
      imageAlt: 'Picadinho'
    },
    {
      imageSrc: '../../../assets/manati-mesas-central.jpg',
      imageAlt: 'Isca 1'
    },
  ]

  desktopImages = [
    {
      imageSrc: '../../../assets/manati-espaco.jpg',
      imageAlt: 'Salmão'
    },
    {
      imageSrc: '../../../assets/bar-area-lateral-manati.jpg',
      imageAlt: 'Coxinha'
    },
    {
      imageSrc: '../../../assets/brinquedoteca-manati.jpg',
      imageAlt: 'Picadinho'
    },
    {
      imageSrc: '../../../assets/banheiro-manati-2.jpg',
      imageAlt: 'Isca 1'
    },
  ]

  ngOnInit(): void {
    this.setImages(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.setImages((event.target as Window).innerWidth);
  }

  private setImages(width: number) {
    this.images = width < 580 ? this.mobileImages : this.desktopImages;
  }

}
