import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { GlobalService } from '../../../services/global.service';

@Component({
	selector: 'app-loading',
	templateUrl: './loading.component.html',
	styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
	constructor(public globalService: GlobalService) {
		//globalService需按引用传递
	}
	ngOnInit() {}
}