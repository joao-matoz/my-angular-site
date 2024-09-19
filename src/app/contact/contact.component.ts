import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  email: string = 'email@email.com'
  telephone: string = '(62)91234-5678'
  adress: string = 'Goiânia/GO'
}
