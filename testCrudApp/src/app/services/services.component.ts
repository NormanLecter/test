import { Component, OnInit } from '@angular/core';
import { ThebestService } from '../thebest.service';
import { Router } from '@angular/router';  
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public text:string;
  public aboutUrl:string;
  public servicesUrl:string;
  public contactUrl:string;

  constructor(private router: Router, private route: ActivatedRoute) { 
  
    this.route.params.subscribe(res => {
      if(res.id == 123){
      this.text = "I am from home because I have " + res.id + " problems";
      this.aboutUrl = "../../about";
      this.contactUrl = "../../contact";
      this.servicesUrl = "../services";
      }
      else{
        this.text = "";
        this.aboutUrl = "../about";
        this.contactUrl = "../contact";
        this.servicesUrl = "services";
      }
    });
  }

  ngOnInit() {
  }

  goHome(){
    this.router.navigate(['']);
  }

}
