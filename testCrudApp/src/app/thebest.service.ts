import { Injectable } from '@angular/core'; 
import { Headers, Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class ThebestService {

  private persons : any;
  private bests = new BehaviorSubject<any>([]);
  best = this.bests.asObservable();
  temp : String;

  constructor() {
    this.persons = JSON.parse(localStorage.getItem("persons"));
    this.bests.next(this.persons);
  }

  changeBests(bestsList){
    this.persons = bestsList;
    localStorage.setItem("persons", JSON.stringify(this.persons))
    this.bests.next(bestsList);
  }

}
