import { Injectable } from '@angular/core'; 
import { Headers, Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class ThebestService {

  private bests = new BehaviorSubject<any>(['Lech Walesa', 'Adam Malysz', 'Jackie Chan']);
  best = this.bests.asObservable();

  constructor() { }

  changeBests(best){
    this.bests.next(best);
  }

}
