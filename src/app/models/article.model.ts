export interface ArticleModel {
	creator: string;
	createTime: number;
	lastEditTime :number;
	category: any;
	tagName: string;
	categoryName:string;
	tag: any;
	readNum: number;
	commentNum:number;
	thumnail?: string;
	poster?: string;
	content:string;
	codeContent: string;
	previewText: string;
	likeNum: number;
	title: string;
	pinYin: Array<string>;
}