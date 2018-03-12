import { Component, OnInit } from '@angular/core';
import { GlobalService } from '@app/services/global.service';
import { Router } from '@angular/router';
import { flyInOut, slideInOut } from '@app/utils/animate';

@Component({
  	selector: 'app-menu',
  	templateUrl: './menu.component.html',
  	styleUrls: ['./menu.component.css'],
    animations:[flyInOut, slideInOut]
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
