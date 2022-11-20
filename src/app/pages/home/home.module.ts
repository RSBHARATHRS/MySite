import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './../../components/carousel/carousel.component';
import { ContactFormComponent } from './../../components/contact-form/contact-form.component';
import { EducationComponent } from './../../components/education/education.component';
import { ProjectsComponent } from './../../components/projects/projects.component';
import { GalleryComponent } from '../../components/gallery/gallery.component'
import { ExperienceComponent } from 'src/app/components/experience/experience.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    EducationComponent,
    ProjectsComponent,
    ContactFormComponent,
    GalleryComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
