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
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  images = input<carouselImage[]>([]);
  indicators = input<boolean>(true);
  controls = input<boolean>(true);
  autoSlide = input<boolean>(true);
  slideinterval = 3000;

  selectedIndex: number = 0;
  slideIntervalId: any = null;

  ngOnInit(): void {
    if (this.autoSlide()) {
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void {
    this.slideIntervalId = setInterval(() => {
      this.onNextClick();
    }, this.slideinterval);
  }

  stopAutoSlide(): void {
    if (this.slideIntervalId !== null) {
      clearInterval(this.slideIntervalId);
    }
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
    if (this.autoSlide()) {
      this.stopAutoSlide();
      this.autoSlideImages();
    }
  }

  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images().length - 1;
    } else {
      this.selectedIndex--;
    }
    if (this.autoSlide()) {
      this.stopAutoSlide();
      this.autoSlideImages();
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.images().length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
    if (this.autoSlide()) {
      this.stopAutoSlide();
      this.autoSlideImages();
    }
  }
}
