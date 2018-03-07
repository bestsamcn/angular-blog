import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HomeService } from '@app/services/guest/home.service';

@Component({
	selector: 'home-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.css'],
	encapsulation:ViewEncapsulation.None
})
export class CategoryComponent implements OnInit {
	public categoryArticleGroup: Array<any> = [];
	constructor(public homeService:HomeService) {}
	ngOnInit() {
		this.homeService.getCategoryList().then((res: any) => {
			this.categoryArticleGroup = res.data;
	    });
	}

}