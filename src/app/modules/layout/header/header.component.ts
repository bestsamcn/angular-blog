import { Component, OnInit } from '@angular/core';
import { GlobalService } from '@app/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public globalService: GlobalService, public router: Router) { }

  ngOnInit() {
  	console.log(this.router)
  }

}
