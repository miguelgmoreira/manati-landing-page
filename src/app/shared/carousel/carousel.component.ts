import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {
  images = input<carouselImage[]>([]);
  indicators = input<boolean>(true);
  controls = input<boolean>(true)
  autoSlide = input<boolean>(true);
  slideinterval = 3000;

  selectedIndex: number = 0;

  ngOnInit(): void {
    if(this.autoSlide()) {
      this.autoSlideImages()
    }
  }

  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideinterval)
  }

  selectImage(index: number): void {
    this.selectedIndex = index
  }

  onPrevClick(): void {
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.images().length - 1
    } else {
      this.selectedIndex--
    }
  }

  onNextClick(): void {
    if(this.selectedIndex === this.images().length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++
    }
  }

}
