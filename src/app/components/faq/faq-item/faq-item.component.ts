import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { DividerComponent } from '../../../shared/divider/divider.component';
import { FaqQuestion } from '../models/faqQuestion.model';

@Component({
  selector: 'app-faq-item',
  standalone: true,
  imports: [CommonModule, DividerComponent],
  templateUrl: './faq-item.component.html',
  styleUrl: './faq-item.component.scss'
})
export class FaqItemComponent {
  question = input<FaqQuestion>()

  expanded: boolean = false;

  toggleExpand(): void {
    this.expanded = !this.expanded
  }
}
