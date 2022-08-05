import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expanding-card',
  templateUrl: './expanding-card.component.html',
  styleUrls: ['./expanding-card.component.scss']
})
export class ExpandingCardComponent implements OnInit {

  cards:Array<any> = [
    {
      imgUrl:"https://images3.alphacoders.com/106/thumb-1920-1061065.png",
      title:"Narato"
    },
    {
      imgUrl:"https://wallpaperaccess.com/full/5283070.jpg",
      title:"Takaki"
    },
    {
      imgUrl:"https://images8.alphacoders.com/103/thumb-1920-1034735.png",
      title:"Nishikata"
    },
    {
      imgUrl:"https://wallpaperaccess.com/full/5112296.jpg",
      title:"Doraemon"
    },
    {
      imgUrl:"https://wallpaperaccess.com/full/3518463.jpg",
      title:"Shinchan"
    }
  ];
  currentActiveCard:number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  activeCard(index:number){
    this.currentActiveCard = index;
  }

}
