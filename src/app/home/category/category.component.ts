import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'home-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.css'],
	encapsulation:ViewEncapsulation.None
})
export class CategoryComponent implements OnInit {
	categoryArticleGroup = [{"_id":{"_id":"599532609fea96721bb4d68a","name":"笔记","__v":0,"clickNum":2,"createTime":1502949984607},"total":3},{"_id":{"_id":"5919a46e5a7cdd0cb7dde782","name":"后端","totalArticle":0,"__v":0,"clickNum":13,"createTime":1494852718840},"total":1},{"_id":{"_id":"5919a4745a7cdd0cb7dde783","name":"前端","totalArticle":4,"__v":0,"clickNum":117,"createTime":1494852724530},"total":12},{"_id":{"_id":"5919a4565a7cdd0cb7dde781","name":"数据库","totalArticle":1,"__v":0,"clickNum":17,"createTime":1494852694229},"total":1},{"_id":{"_id":"5919a4445a7cdd0cb7dde780","name":"运维","totalArticle":1,"__v":0,"clickNum":13,"createTime":1494852676736},"total":1},{"_id":{"_id":"5919a4c35a7cdd0cb7dde78d","name":"面试","totalArticle":1,"__v":0,"clickNum":9,"createTime":1494852803753},"total":1},{"_id":{"_id":"5919a43c5a7cdd0cb7dde77f","name":"生活","totalArticle":4,"__v":0,"clickNum":29,"createTime":1494852668686},"total":7}];
	constructor() {}

	ngOnInit() {}

}