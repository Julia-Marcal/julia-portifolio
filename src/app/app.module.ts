import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalaxyComponent } from './galaxy/galaxy.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ContactComponent,
    NavbarComponent,
    GalaxyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
})
export class AppModule { }
