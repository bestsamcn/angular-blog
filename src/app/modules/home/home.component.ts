import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { HomeService } from '@app/services/guest/home.service';
import { GlobalService } from '@app/services/global.service';
import { PAGE_SIZE } from '@app/config/config.global';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	pageIndex = 1;
	articleList = [];
	isMore = true
	constructor(private HttpClient: HttpClient, public homeService: HomeService, public globalService: GlobalService) {
		this.HttpClient = HttpClient;
	}
	getArticleList(isRefresh?:boolean){
		this.homeService.getArticleList(this.pageIndex).then((res: any)=>{
			this.pageIndex++;
			isRefresh ? (this.articleList = res.data ) : (this.articleList = this.articleList.concat(res.data));
			if(res.total > this.pageIndex* PAGE_SIZE){
				this.isMore = true;
			}else{
				this.isMore = false;
			}
			//保存公共的文章列表
			this.homeService.setArticleList(res.data);
		});
	}
	ngOnInit() {
		this.getArticleList(true);
	}

}