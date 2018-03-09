import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { POSTER_URL } from '../../../config/config.global';
import { GlobalService } from '@app/services/global.service';
import { Router } from '@angular/router';

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
	constructor(public globalService: GlobalService, private router: Router) {
		
	}
	
	//路由跳转
	navigate(id){
		this.router.navigate([`/article/detail/${id}`])
	}
	ngOnInit() {
	}

}
