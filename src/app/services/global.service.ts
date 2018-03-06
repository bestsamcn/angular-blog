import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
	private toastTimer: any = null;
	public token: string = '';
	public userInfo: any = {};
	public isLoading: boolean = false;
	public toastMessage: string = '';
  	constructor() {
		this.getLocalToken();
  	}
  	//设置loading
  	setLoadingState(bool: boolean){
  		this.isLoading = bool;
  	}
  	//设置token
  	setToken(token: string){
  		this.token = token;
  	}
  	//获取本地缓存token
  	getLocalToken():void{
  		let token: string = localStorage.__bestToken__ || '';
  		this.token = token;
  	}
  	//设置气泡提示
  	setToastMessage(msg: string){
  		this.toastTimer && clearTimeout(this.toastTimer);
  		this.toastMessage = msg;
  		this.toastTimer = setTimeout(()=>{
  			this.toastMessage = ''
  		}, 2000);
  	}

}
