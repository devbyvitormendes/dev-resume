import { Component } from '@angular/core';
import { PersonalDataUtil } from '../../util/personal-data.util';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  personalData: PersonalDataUtil;

  constructor() {
    this.personalData = new PersonalDataUtil();
  }

}
