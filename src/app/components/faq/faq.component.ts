import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ButtonComponent } from '../../shared/button/button.component';
import { DividerComponent } from '../../shared/divider/divider.component';
import { WindowService } from '../../shared/services/window/window.service';
import { TitleComponent } from '../../shared/title/title.component';
import { FaqItemComponent } from './faq-item/faq-item.component';
import { FaqQuestion } from './models/faqQuestion.model';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    CommonModule,
    FaqItemComponent,
    TitleComponent,
    DividerComponent,
    ButtonComponent,
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent implements OnInit {
  faqQuestions: FaqQuestion[] = [
    {
      question: 'Como funciona o cardápio ?',
      answer:
        'Temos uma enorme variedade, nosso cardápio tem opções de peixes, frutos do mar, carnes, saladas e diversos acompanhamentos, veja mais no <a href="https://www.deliway.com.br/restaurante-manati-delivery-brasilia-df" target="_blank">nosso cardápio digital</a>. O valor é de R$ 124,00 o KG de segunda a sexta-feira e R$ 134,00 aos finais de semana e feriados. </br></br> Oferecemos também a opção de se servir à vontade em nosso buffet livre. Por R$89,90 de seg a sexta e 109,90 aos finais de semana e feriados.',
    },
    {
      question: 'Vocês oferecem algo para aniversariantes ?',
      answer:
        'O aniversariante no restaurante tem vários benefícios: ganha decoração de mesa com balões, um Grand Gateau (sobremesa famosa do Manati, no sabor de sua preferência)😋. </br></br> E para grupos com mais de 10 convidados, também ganha 1 drink (alcoólico ou não).',
    },
    {
      question: 'Como faço uma reserva para aniversariantes ou outra data ?',
      answer:
        'Enviamos um link para que você possa fazer sua reserva facilmente: <a href="https://widget.getinapp.com.br/D6dNW7PM" target="_blank">Clique aqui</a>. Se preferir, podemos ajudar através do nosso WhatsApp.',
    },
    {
      question: 'Onde fica o Manatí ?',
      answer:
        'Estamos localizados na QS 01 Rua 210 em Águas Claras, ao lado do UNICEUB. Para direções, consulte por este link: <a href="https://www.google.com/maps" target="_blank">Google Maps</a>.',
    },
    {
      question: 'Como funciona a agenda musical ?',
      answer:
        'Venha curtir música ao vivo de quinta a domingo no Manati Restaurante! </br> Oferecemos apresentações durante o almoço, às 12:30, e durante o jantar, às 19:30. </br></br>Confira nossa agenda semanal em nosso Instagram: <a href="https://www.instagram.com/manatirestaurante" target="_blank">@manatirestaurante</a>. </br></br>Horários das atrações: </br></br>Quinta-feira: 12:30 e 19:30</br>Sexta-feira: 12:30 e 19:30</br>Sábado: 12:30, 15:30 e 19:30</br>Domingo: 12:30 e 15:30',
    },
    {
      question: 'Como funciona o happy hour ?',
      answer:
        'Temos happy hour das 15:00 às 20:00 de terça a domingo. Consulte nosso cardápio para promoções específicas de happy hour: <a href="https://www.deliway.com.br/restaurante-manati-delivery-brasilia-df" target="_blank">Clique aqui</a>.',
    },
  ];
  isMobileScreen: boolean = false;

  buttonSize: string = '';

  constructor(private sanitizer: DomSanitizer, private windowService: WindowService) {}

  ngOnInit(): void {
    this.isMobileScreen = this.windowService.isMobileScreen();
    if (this.isMobileScreen) {
      this.buttonSize = 'medium';
    } else {
      this.buttonSize = 'large';
    }

    this.faqQuestions.forEach(question => {
      question.answerHtml = this.sanitizer.bypassSecurityTrustHtml(question.answer);
      question.question = this.addNonBreakingSpace(question.question);
    });
  }

  addNonBreakingSpace(text: string): string {
    return text.replace(/ ([^ ]*\?)/, '&nbsp;$1');
  }
}
