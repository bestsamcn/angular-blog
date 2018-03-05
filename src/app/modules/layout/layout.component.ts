import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';


@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
	public isLoading: boolean = false;
	constructor(public globalService: GlobalService) {
	}

	ngOnInit() {}
}
