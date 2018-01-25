import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-toast',
	templateUrl: './toast.component.html',
	styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
	@Input() msg: string;
	constructor() {}
	ngOnInit() {}
}