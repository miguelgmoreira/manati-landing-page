import { CommonModule } from '@angular/common';
import { Component, HostListener, output } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  navigateToSection = output<string>();

  menuExpanded: boolean = false;

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    if(window.innerWidth > 768) {
      if(this.menuExpanded) {
        this.menuExpanded = false;
      }
    }
  }
  
  toggleExpand() {
    this.menuExpanded = !this.menuExpanded;
  }

  navigateTo(section: string) {
    this.menuExpanded = false;
    this.navigateToSection.emit(section);
  }

}
