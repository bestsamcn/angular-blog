import { Injectable } from '@angular/core';
import { Request } from '@app/utils/request';
import { PAGE_SIZE } from '@app/config/config.global';
import { GlobalService } from '@app/services/global.service';

@Injectable()
export class ArticleService {

	constructor(private request: Request, private globalService: GlobalService) {}

	//获取文章详情
	getArticleDetail(id) {
		return this.request.get({url:'/article/getDetail', params:{id:id, type:1}});
	}

	//点赞文章
	setArticleLike(params:{id: string}){
		return this.request.post({url:'/article/like', params});
	}

	//获取文章评论列表
	getCommentList(params: {id: string, pageIndex: number, pageSize: number}){
		return this.request.get({url:'/comment/getList', params:params});
	}

	//添加文章评论
	addComment(params: {article: string, name: string, email: string, content: string, parentComment: string}){
		return this.request.post({url:'/comment/add', params:params});
	}

	//点赞评论
	setCommentLike(params: {id: string, isLike: boolean}){
		return this.request.post({url:'/comment/like', params:params});
	}


}