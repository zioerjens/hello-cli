import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {

  @ViewChild('email') emailRef : ElementRef;
  @ViewChild('repeatEmail') repeatEmailRef : ElementRef;
  private email : HTMLInputElement;
  private repeatEmail : HTMLInputElement;

  constructor() { 
  }

  ngAfterViewInit(): void {
    this.email = this.emailRef.nativeElement;
    this.repeatEmail = this.repeatEmailRef.nativeElement;
    this.email.addEventListener("change", (event) => this.validateEmails(event));
  }

  validateEmails(event : Event) {
    if( this.email.value != "" && this.repeatEmail.value != "" && this.email.value != this.repeatEmail.value) {
      this.repeatEmail.setCustomValidity("Die E-Mail Adresse muss identisch sein");
    }
  }

}
