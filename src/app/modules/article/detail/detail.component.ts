import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { ArticleService } from '@app/services/guest/article.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';
import $$ from '@app/utils';
import { GlobalService } from '@app/services/global.service';
import { ArticleModel } from '@app/models/article.model';

@Component({
	selector: 'article-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
	article: any = {};
	prevID:string;
	nextID:string;
	isLiked:boolean;
	id:string;
	constructor(public globalService: GlobalService, private location: Location, public activatedRoute: ActivatedRoute, private articleService: ArticleService, private domSanitizer: DomSanitizer) {}
	
	//获取参数和文章详情
	getArticleDetail(){
		this.activatedRoute.params.subscribe(async (params: Params)=>{
			this.id = params.id;
			let res: any = await this.articleService.getArticleDetail(this.id);
			//解决xss安全提示
			res.data.curr.content = this.domSanitizer.bypassSecurityTrustHtml(res.data.curr.content);
			this.article = res.data.curr;
			this.prevID = res.data.prev && res.data.prev._id;
			this.nextID = res.data.next && res.data.next._id;
			if($$.getCookie(this.id)){
                this.isLiked = true;
            }
		});
	}

	//点赞文章
	setArticleLike(){
		if($$.getCookie(this.id)){
            this.globalService.setToast('已经点赞过啦');
            return;
        }
        let res: any = this.articleService.setArticleLike({id:this.id})
        $$.setCookie(this.id, true, 7);
        this.isLiked = true;
        this.article.likeNum = this.article.likeNum+1;
	}

	//返回上一级
	goBack(){
		this.location.back();
	}
	ngOnInit() {
		this.getArticleDetail();
	}
}