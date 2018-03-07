import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { POSTER_URL } from '../../../config/config.global';

@Component({
  selector: 'article-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	@Input() articleList:Array<Object>;
	@Input() isMore?:boolean = false;
	@Input() isShowMore?:boolean = true;
	@Output() onMoreClick = new EventEmitter();
	POSTER_URL = POSTER_URL;
	constructor() {
		
	}

	ngOnInit() {
	}

}
