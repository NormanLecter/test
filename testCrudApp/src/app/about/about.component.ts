import { Component, OnInit } from '@angular/core';
import { ThebestService } from '../thebest.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public theBestList = [];

  constructor(private _bestData : ThebestService) { }

  ngOnInit() {
    this._bestData.best.subscribe(res => this.theBestList = res);
    this._bestData.changeBests(this.theBestList);
  }

}
