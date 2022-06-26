import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './../../components/carousel/carousel.component';
import { ContactFormComponent } from './../../components/contact-form/contact-form.component';
import { EducationComponent } from './../../components/education/education.component';
import { ProjectsComponent } from './../../components/projects/projects.component';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    EducationComponent,
    ProjectsComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
