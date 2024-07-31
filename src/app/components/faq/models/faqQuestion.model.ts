import { SafeHtml } from "@angular/platform-browser";

export class FaqQuestion {
    constructor(public question: string, public answer: string, public answerHtml?: SafeHtml) {

    }
}