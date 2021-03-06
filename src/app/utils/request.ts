import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalService } from '../services/global.service';
import { Injectable } from '@angular/core';
import { ROOT_API } from '@app/config/config.global';

interface Config{
	url:string,
	params?:object | any,
	isToast?:false
}

@Injectable()
export class Request {
	constructor(public httpClient: HttpClient, public globalService: GlobalService){

	}

	//get请求
	get(config: Config){
		!this.globalService.isLoading && this.globalService.setLoadingState(true);
		return new Promise((resolve: any)=>{
			this.httpClient.get(ROOT_API+config.url, {params:config.params}).subscribe((res: any)=>{
				this.globalService.isLoading && this.globalService.setLoadingState(false);
				config.isToast && this.globalService.setToast(res.message || '请求成功');
				resolve(res);
			});
		});
	}

	//post请求
	post(config: Config){
		!this.globalService.isLoading && this.globalService.setLoadingState(true);
		return new Promise((resolve: any)=>{
			this.httpClient.post(ROOT_API+config.url, config.params).subscribe((res: any)=>{
				this.globalService.isLoading && this.globalService.setLoadingState(false);
				config.isToast && this.globalService.setToast(res.message || '请求成功');
				resolve(res);
			});
		});
	}
}
