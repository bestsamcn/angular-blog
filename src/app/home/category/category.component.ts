import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

@Component({
	selector: 'home-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.css'],
	encapsulation:ViewEncapsulation.None
})
export class CategoryComponent implements OnInit {
	categoryArticleGroup:Array<Object>
	constructor(private httpClient:HttpClient) {}
	ngOnInit() {
		this.httpClient.get('http://api.bestsamcn.me/api/article/getDiffArticle?type=1').subscribe(data => {
			console.log(data)
			this.categoryArticleGroup = data.data;
	    });
	}

}