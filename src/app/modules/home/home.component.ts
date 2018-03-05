import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public articleList = [];
	constructor(private HttpClient: HttpClient) {
		this.HttpClient = HttpClient;
	}
	ngOnInit() {
		this.HttpClient.request('GET','http://api.bestsamcn.me/api/article/getList').subscribe((res: any)=>{
			this.articleList = res.data;
		})
	}

}