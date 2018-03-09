import { Injectable } from '@angular/core';
import { Request } from '@app/utils/request';
import { PAGE_SIZE } from '@app/config/config.global';
import { GlobalService } from '@app/services/global.service';

@Injectable()
export class HomeService {
	private pageSize = PAGE_SIZE;
	//公用的文章列表，防止重复请求
	public articleList = [];
    constructor(public request: Request, public globalService: GlobalService) {
		this.getHotWordList();
    }
	
	//公共文章列表
    setArticleList(list: any){
		this.articleList = this.articleList.concat(list);
    }

    //获取文章列表
    getArticleList(pageSize: number){
		return this.request.get({url:'/article/getList', params:{pageIndex:pageSize, pageSize:this.pageSize}});
    }

    //获取分类列表
	getCategoryList(){
		return this.request.get({url:'/article/getDiffArticle', params:{type:1, pageIndex:1, pageSize:4}});
	}

	//获取标签列表
	getTagList(){
		return this.request.get({url:'/tag/getList', params:{}});
	}

	//获取最热文章列表
	getHotList(){
		return this.request.get({url:'/article/getList', params:{type:1, pageIndex:1, pageSize:4}});
	}

	//获取评论里列表
	getLatestComent(){
		return this.request.get({url:'/comment/getList', params:{pageIndex:1, pageSize:4}});
	}

	//获取阅读量倒序文章列表
	getReadNumAritlce(){
		return this.request.get({url:'/article/getList', params:{type:2, pageIndex:1, pageSize:4}});
	}

	//获取热词列表
	getHotWordList(){
		this.request.get({url:'/hot/getList', params:{type:2, pageIndex:1, pageSize:4}}).then((res: any)=>{
			this.globalService.setHotWordList(res.data);
		});
	}
}
