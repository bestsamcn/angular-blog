import { HttpClient, HttpHeaders, HttpParams, URLSearchParams } from '@angular/common/http';
import { GlobalService } from '../services/global.service';
import { Injectable } from '@angular/core';

interface Config{
	url:string,
	params?:object | any,
	isToast?:false
}

@Injectable()
export class Request {
	constructor(public httpClient: HttpClient, public globalService: GlobalService){

	}
	get(config: Config){
		return new Promise((resolve: any)=>{
			this.httpClient.get(config.url, {params:config.params}).subscribe((res: any)=>{
				config.isToast && this.globalService.setToastMessage(res.message || '请求成功');
				resolve(res.data);
			});
		});
	}
	post(config: Config){
		return new Promise((resolve: any)=>{
			this.httpClient.post(config.url, config.params}).subscribe((res: any)=>{
				config.isToast && this.globalService.setToastMessage(res.message || '请求成功');
				resolve(res.data);
			});
		});
	}
}
