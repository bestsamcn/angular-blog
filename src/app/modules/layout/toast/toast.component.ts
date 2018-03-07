import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from '../../../services/global.service';

@Component({
	selector: 'app-toast',
	templateUrl: './toast.component.html',
	styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
	constructor(public globalService: GlobalService) {
	}
	ngOnInit() {
		console.log(this.globalService)
	}
}