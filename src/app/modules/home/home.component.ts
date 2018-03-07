import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Request } from '../../utils/request';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public articleList = [];
	constructor(private HttpClient: HttpClient, public request: Request) {
		console.log(this.request)
		this.HttpClient = HttpClient;
	}
	ngOnInit() {
		console.log(this.request)
		this.request.get({url:'http://api.bestsamcn.me/api/article/getList', params:{pageIndex:1, pageSize:5}}).then((res: any)=>{
			this.articleList = res;
		})


	}

}