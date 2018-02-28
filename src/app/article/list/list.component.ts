import { Component, OnInit, Input } from '@angular/core';
import { POSTER_URL } from '../../config/config.global';

@Component({
  selector: 'article-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	@Input() articleList:Array<Object>;
	@Input() isMore?:boolean;
	@Input() isShowMore?:boolean;
	POSTER_URL = POSTER_URL;
	constructor() {
		
	}

	ngOnInit() {
	}

}
