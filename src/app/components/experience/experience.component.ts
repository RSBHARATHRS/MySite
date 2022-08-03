import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/job.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experience: Array<Experience> = [
    {
      id: 1,
      duration: {
        start: "11",
        end: "present"
      },
      title: "Angular Developer",
      orgName: "IDP Education private ltd",
    },
    {
      id: 2,
      duration: {
        start: "34",
        end: ""
      },
      title: "Angular Developer",
      orgName: "IDP Education private ltd",
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
