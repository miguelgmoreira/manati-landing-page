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
      answer: `
    No Manati, oferecemos um cardápio variado que agrada a todos os paladares — dos apaixonados por frutos do mar até quem prefere carnes, petiscos ou uma sobremesa caprichada. Veja como funciona:<br><br>
    🍽 Almoço com buffet self-service<br><br>
    Segunda a sexta: das 11h30 às 15h<br>
    &emsp;▫ À vontade: R$ 89,90<br>
    &emsp;▫ Por quilo: R$ 129,00/kg<br>
    Sábados, domingos e feriados: das 11h30 às 16h<br>
    &emsp;▫ À vontade: R$ 109,90<br>
    &emsp;▫ Por quilo: R$ 139,00/kg<br>
    Inclui variedade de frutos do mar, carnes, massas, saladas e acompanhamentos.<br><br>
    🌙 Jantar à la carte<br><br>
    Pratos individuais e para compartilhar<br>
    Entradas, pratos principais e sobremesas especiais (como o nosso famoso Grand Gateau)<br>
    Combos promocionais ideais para jantar a dois ou em grupo<br><br>
    🍤 Petiscos e drinks<br><br>
    Disponíveis durante o happy hour (de terça a domingo, das 15h às 20h)<br>
    Porções variadas, drinks autorais, cervejas geladas, sucos e sobremesas selecionadas com preço especial<br><br>
    Veja mais no <a href="https://www.deliway.com.br/restaurante-manati-delivery-brasilia-df" target="_blank">nosso cardápio digital</a>.
  `,
    },
    {
      question: 'Vocês oferecem algo para aniversariantes ?',
      answer: `
    Sim! Aqui no Manati, aniversariante tem vez e tem mimo! 🎈🥳<br><br>
    Se você estiver comemorando seu aniversário conosco, confira as cortesias e benefícios que preparamos para deixar sua experiência ainda mais especial:<br><br>
    🍰 Sobremesa de cortesia: ganhe um Grand Gateau incrível para celebrar!<br>
    🍹 Drink especial: aniversariante de grupos acima de 10 pessoas ganha um drink ou suco especial além da sobremesa.<br>
    🎈 Balão personalizado na cor escolhida.<br>
    🎂 Bolo e doces liberados: você pode trazer seu próprio bolo e docinhos, sem taxa extra.<br>
    🎶 Música ao vivo: aproveite nossa programação musical para animar ainda mais sua comemoração.<br>
    🧾 Comanda individual: cada convidado pode consumir à vontade e pagar apenas o que consumir.<br>
    🌳 Espaço ao ar livre: áreas externas aconchegantes para celebrar ao lado da natureza.<br>
    📲 WhatsApp para reserva: agilize tudo com facilidade — é só chamar no WhatsApp para garantir sua data.
  `,
    },
    {
      question: 'Como faço uma reserva para aniversariantes ou outra data ?',
      answer: `
    É super fácil reservar sua mesa no Manati, seja para comemorar um aniversário, uma data especial ou apenas garantir seu lugar com tranquilidade!<br><br>
    💬 Chame a gente no WhatsApp: basta enviar uma mensagem clicando no botão de reserva no site ou no nosso número de atendimento. Informe a data, horário e quantidade de pessoas.<br>
    🎉 Aniversariante? Avise na hora da reserva para garantir todos os mimos e cortesias especiais que oferecemos.<br>
    👨‍👩‍👧‍👦 Grupos grandes? Para 10 pessoas ou mais, recomendamos reservar com antecedência. Oferecemos vantagens exclusivas!<br>
    🕐 Horários com música ao vivo ou datas especiais costumam lotar — então quanto antes reservar, melhor!
  `,
    },
    {
      question: 'Onde fica o Manatí ?',
      answer: `
    O Manati Restaurante e Bar está localizado em um dos pontos mais agradáveis da cidade:<br><br>
    📌 QS 01 Rua 210 em Águas Claras, ao lado do UNICEUB<br><br>
    Ambiente amplo, com espaço ao ar livre, brinquedoteca, aquários e música ao vivo. Ideal para almoços, jantares, aniversários e encontros com a família ou amigos.<br><br>
    🅿 Temos estacionamento no local.<br><br>
    Consulte a localização por este link: <a href="https://www.google.com/maps" target="_blank">Google Maps</a>.
  `,
    },
    {
      question: 'Como funciona a agenda musical ?',
      answer: `
    Aqui no Manati, a música ao vivo faz parte da experiência! Nossa programação musical vai de quarta a domingo, com estilos variados que agradam todos os gostos: samba, rock, pop, sertanejo, axé e brasilidades. Confira os horários:<br><br>
    Quarta: 19h<br>
    Quinta e Sexta: 12h30 e 19h<br>
    Sábado: 12h30, 15h30 e 19h<br>
    Domingo: 12h30 e 15h30<br><br>
    🎤 As atrações tocam ao vivo em um ambiente descontraído, com espaço ao ar livre, iluminação nas árvores e clima perfeito para curtir com amigos, família ou a dois.<br><br>
    📲 Quer saber quem vai tocar no dia da sua visita? É só perguntar no WhatsApp ou conferir no Instagram.
  `,
    },
    {
      question: 'Como funciona o happy hour ?',
      answer: `
    Nosso happy hour é o momento ideal pra relaxar, reunir os amigos e aproveitar o melhor do Manati com preço especial!<br><br>
    🕒 Acontece de terça a domingo, das 15h às 20h, com promoções imperdíveis:<br><br>
    🍤 Petiscos com desconto<br>
    🍹 Drinks especiais em promoção<br>
    🍨 Sobremesas selecionadas com preço especial<br><br>
    Tudo isso em um ambiente ao ar livre, com música, brinquedoteca para as crianças e atendimento acolhedor. Perfeito para quem quer curtir o fim do dia com estilo.<br><br>
    Chame no WhatsApp e pergunte sobre as promoções do dia.</br></br>
    Consulte nosso cardápio: <a href="https://www.deliway.com.br/restaurante-manati-delivery-brasilia-df" target="_blank">Clique aqui</a>.
  `,
    },
  ];
  isMobileScreen: boolean = false;

  buttonSize: string = '';

  constructor(
    private sanitizer: DomSanitizer,
    private windowService: WindowService
  ) {}

  ngOnInit(): void {
    this.isMobileScreen = this.windowService.isMobileScreen();
    if (this.isMobileScreen) {
      this.buttonSize = 'medium';
    } else {
      this.buttonSize = 'large';
    }

    this.faqQuestions.forEach((question) => {
      question.answerHtml = this.sanitizer.bypassSecurityTrustHtml(
        question.answer
      );
      question.question = this.addNonBreakingSpace(question.question);
    });
  }

  addNonBreakingSpace(text: string): string {
    return text.replace(/ ([^ ]*\?)/, '&nbsp;$1');
  }
}
