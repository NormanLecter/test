import { Component, OnInit } from '@angular/core';
import { ThebestService } from '../thebest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public theBestList = [];
  public newBestPerson : string;

  constructor(private _bestData : ThebestService){}

  ngOnInit(){
    this._bestData.best.subscribe(res => { if(!(res == null)) this.theBestList = res });
    this._bestData.changeBests(this.theBestList);
  }

  addPerson() {
    this.theBestList.push(this.newBestPerson);
    this.newBestPerson = '';
    this._bestData.changeBests(this.theBestList);
  }

  addPersonEnter(event) {
    if(event.keyCode == 13) {
      this.theBestList.push(this.newBestPerson);
      this.newBestPerson = '';
      this._bestData.changeBests(this.theBestList); 
    }
  }

  removePerson(i) {
    this.theBestList.splice(i, 1);
    this._bestData.changeBests(this.theBestList);
  }

}
