import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit {

  navActive:boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  openSideNav() {
    this.navActive = !this.navActive;
  }


}
