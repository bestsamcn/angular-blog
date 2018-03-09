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

}