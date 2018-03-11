import { Component, OnInit } from '@angular/core';
import { GlobalService } from '@app/services/global.service';
import { Router } from '@angular/router';

@Component({
  	selector: 'app-menu',
  	templateUrl: './menu.component.html',
  	styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  	constructor(public globalService: GlobalService, public router: Router) { }
  	goAndHideMenu(routerName: string){
	    this.globalService.setMenuVisible();
	    this.router.navigate([routerName]);
	  }

  	ngOnInit() {
  	}

}
