import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { ArticleService } from '@app/services/guest/article.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
	selector: 'article-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
	article = {};
	prevID:string;
	nextID:string;
	id:string;
	constructor(private location: Location, public activatedRoute: ActivatedRoute, private articleService: ArticleService, private domSanitizer: DomSanitizer) {}
	
	//获取参数和文章详情
	getArticleDetail(){
		this.activatedRoute.params.subscribe(async (params: Params)=>{
			this.id = params.id;
			let res: any = await this.articleService.getArticleDetail(this.id);
			this.article = res.data.curr;
			this.prevID = res.data.prev && res.data.prev._id;
			this.nextID = res.data.next && res.data.next._id;
		});
	}

	//返回上一级
	goBack(){
		this.location.back();
	}
	ngOnInit() {
		this.getArticleDetail();
	}
}