import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'home-tag',
	templateUrl: './tag.component.html',
	styleUrls: ['./tag.component.css'],
	encapsulation:ViewEncapsulation.None
})
export class TagComponent implements OnInit {
	tagArticleGroup = [{"_id":"594f97e254d0fc6989c95e4c","name":"react","__v":0,"clickNum":3,"createTime":1498388450529},{"_id":"591c67e4566af1355e2009cf","name":"Others","totalArticle":5,"__v":0,"clickNum":5,"createTime":1495108974254},{"_id":"5919a4ba5a7cdd0cb7dde78c","name":"Css3","totalArticle":0,"__v":0,"clickNum":2,"createTime":1495108983675},{"_id":"5919a4b15a7cdd0cb7dde78b","name":"Javascript ","totalArticle":2,"__v":0,"clickNum":8,"createTime":1495109001263},{"_id":"5919a4a95a7cdd0cb7dde78a","name":"Angular","totalArticle":0,"__v":0,"clickNum":2,"createTime":1495109022027},{"_id":"5919a4a45a7cdd0cb7dde789","name":"Vue","totalArticle":2,"__v":0,"clickNum":5,"createTime":1495109029627},{"_id":"5919a4a05a7cdd0cb7dde788","name":"Node","totalArticle":0,"__v":0,"clickNum":3,"createTime":1495109045676},{"_id":"5919a4955a7cdd0cb7dde787","name":"Mongodb","totalArticle":0,"__v":0,"clickNum":0,"createTime":1495109057168},{"_id":"5919a48c5a7cdd0cb7dde786","name":"Redis","totalArticle":1,"__v":0,"clickNum":2,"createTime":1495109064423},{"_id":"5919a4885a7cdd0cb7dde785","name":"Nginx","totalArticle":1,"__v":0,"clickNum":3,"createTime":1495109073452},{"_id":"5919a4855a7cdd0cb7dde784","name":"Linux","totalArticle":0,"__v":0,"clickNum":0,"createTime":1495109088494}]
	constructor() {}

	ngOnInit() {}

}