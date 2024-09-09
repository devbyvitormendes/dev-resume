import { Component } from '@angular/core';
import { PersonalDataUtil } from '../../util/personal-data.util';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  personalData: PersonalDataUtil;

  constructor() {
    this.personalData = new PersonalDataUtil();
  }
  
}
