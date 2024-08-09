import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { WindowService } from '../../shared/services/window.service';
import { TitleComponent } from '../../shared/title/title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, CommonModule, TitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('video') video!: ElementRef;

  isMobileScreen: boolean = false;
  buttonSize: string = '';
  autoplayFailed!: boolean;

  constructor(private windowService: WindowService) {}

  ngOnInit(): void {
    this.isMobileScreen = this.windowService.isMobileScreen();
    if (this.isMobileScreen) {
      this.buttonSize = 'medium';
      this.isMobileScreen = true;
    } else {
      this.buttonSize = 'large';
      this.isMobileScreen = false;
    }
  }

  ngAfterViewInit(): void {
    this.setupHomeBackground();
  }

  private setupHomeBackground(): void {
    if (this.isMobileScreen) {
      const videoElement = this.video.nativeElement;

      videoElement.play()
      .then(() => {
        videoElement.play();
      })
      .catch(() => {
        this.autoplayFailed = true;
      });
    }
  }
}
