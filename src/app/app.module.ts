import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GalaxyComponent } from './components/galaxy/galaxy.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarComponent,
    GalaxyComponent,
    AppComponent,
  ],
  providers: [],
})
export class AppModule { }
