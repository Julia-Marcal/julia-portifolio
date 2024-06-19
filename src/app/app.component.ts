import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GalaxyComponent } from './galaxy/galaxy.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GalaxyComponent, NavBarComponent, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portifolio-in-angular';
}
