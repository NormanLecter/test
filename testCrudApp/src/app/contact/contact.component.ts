import { Component, Input, OnInit } from '@angular/core';
import { DynamicSearchPipe } from '../dynamic-search.pipe';
import { ThebestService } from '../thebest.service';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('tips', [
      transition(':enter', [ 

        query(':self', style({ opacity: 0 }), {optional: true}),

        query(':self', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: false})
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {

  public theBestList = [];
  returnMessage : boolean = false;
  onList : boolean = false;
  notOnList : boolean = false;
  lookinPerson : string = "";
  searchText : string;
  counterToArrow : number = 0;

  constructor(private _bestData : ThebestService) { }

  ngOnInit() {
    this._bestData.best.subscribe(res => { if(!(res == null)) this.theBestList = res });
    this._bestData.changeBests(this.theBestList);
  }

  searchPerson(event, searchText) {
    if(event.keyCode == 13) {
      this.searchText = "";
      this.onList = false;
      this.notOnList = false;
      this.lookinPerson = searchText;
      for(let i = 0; i < this.theBestList.length; i++){
        if(this.lookinPerson.toLowerCase() == this.theBestList[i].toLowerCase()){
          this.lookinPerson = this.theBestList[i];
          this.onList = true;
          break;
        }
      }
      if(!this.onList) this.notOnList = true;
    }
  }

  pastTip(event, theBestList){
    if(event.keyCode == 40){
      this.searchText = theBestList[this.counterToArrow];
      if(this.counterToArrow == theBestList.length){
        this.counterToArrow = 0;
      }
      else{
        this.counterToArrow++;
      }
    }
  }

  searchPersonClick(searchText) {
    this.searchText = "";
    this.onList = false;
    this.notOnList = false;
    this.lookinPerson = searchText;
    for(let i = 0; i < this.theBestList.length; i++){
      if(this.lookinPerson.toLowerCase() == this.theBestList[i].toLowerCase()){
        this.lookinPerson = this.theBestList[i];
        this.onList = true;
        break;
      }
    }
    if(!this.onList) this.notOnList = true;
  }
}
