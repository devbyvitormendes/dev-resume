import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './menu/navbar/navbar.component';
import { HomeComponent } from './sections/home/home.component';
import { AboutComponent } from './sections/about/about.component';
import { HobbiesComponent } from './sections/hobbies/hobbies.component';
import { ContactComponent } from './sections/contact/contact.component';
import { AchievementsComponent } from "./sections/achievements/achievements.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    AchievementsComponent,
    HobbiesComponent,
    ContactComponent, AchievementsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Vitor Mendes';
}
