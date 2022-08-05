import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ExpandingCardComponent } from './../../components/expanding-card/expanding-card.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ExpandingCardComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
