import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'home-rank',
	templateUrl: './rank.component.html',
	styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {
	activeIndex = 3;
	constructor() {}
	onTabChange: void(n:number)=>{
		this.activeIndex = n;
	}
	ngOnInit() {}

}