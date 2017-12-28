import { Component, OnInit } from '@angular/core';
import { ThebestService } from '../thebest.service';
import { Router } from '@angular/router';  


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

  goHome(){
    this.router.navigate(['']);
  }

}
