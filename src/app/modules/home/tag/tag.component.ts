import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HomeService } from '@app/services/guest/home.service';

@Component({
	selector: 'home-tag',
	templateUrl: './tag.component.html',
	styleUrls: ['./tag.component.css'],
	encapsulation:ViewEncapsulation.None
})
export class TagComponent implements OnInit {
	tagArticleGroup = [];
	constructor(public homeService: HomeService) {}
	ngOnInit() {
		this.homeService.getTagList().then((res: any)=>{
			this.tagArticleGroup = res.data;
		});
	}

}