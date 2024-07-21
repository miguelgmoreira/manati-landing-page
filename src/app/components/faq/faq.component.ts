import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { DividerComponent } from '../../shared/divider/divider.component';
import { TitleComponent } from '../../shared/title/title.component';
import { FaqItemComponent } from './faq-item/faq-item.component';
import { FaqQuestion } from './models/faqQuestion.model';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule ,FaqItemComponent, TitleComponent, DividerComponent, ButtonComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  faqQuestions: FaqQuestion[] = [
    {
      question: 'Gostaria de saber se vocês oferecem algo para aniversariantes',
      answer:
        'Aniversariantes recebem uma sobremesa de cortesia e, ao trazer 10 convidados também ganham um drink',
    },
    {
      question: 'Como funciona a decoração para aniversariantes',
      answer:
        'teste',
    },
    {
      question: 'Como faço uma reserva para aniversariantes ou outra data',
      answer:
        'teste',
    },
    {
      question: 'Como funciona o cardápio',
      answer:
        'teste',
    },
    {
      question: 'Onde fica o Manatí',
      answer:
        'teste',
    },
    {
      question: 'Como funciona a agenda musical',
      answer:
        'teste',
    },
    {
      question: 'Como funciona o happy hour',
      answer:
        'teste',
    },
  ];
}
