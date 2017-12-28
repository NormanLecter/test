import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-number',
  templateUrl: './service-number.component.html',
  styleUrls: ['./service-number.component.scss']
})
export class ServiceNumberComponent implements OnInit {

  public text:string;

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(res => this.text = "I am from home because I have " + res.id + " problems");
  }

  ngOnInit(){}

}
