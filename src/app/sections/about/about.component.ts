import { Component } from '@angular/core';
import { PersonalDataUtil } from '../../util/personal-data.util';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  personalData: PersonalDataUtil;

  constructor() {
    this.personalData = new PersonalDataUtil();
  }
  
}
