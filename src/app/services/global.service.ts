import { Injectable } from '@angular/core';
import $$ from '@app/utils';

@Injectable()
export class GlobalService {
	private toastTimer: any = null;
    public isMobile: boolean = false;
	public token: string = '';
	public userInfo: any = {};
	public isLoading: boolean = false;
	public toastMessage: string = '';
    public hotWordList = [];
  	constructor() {
		this.getLocalToken();
        this.getDeviceType();
  	}

    //查看设备类型
    getDeviceType(){
        this.isMobile =  $$.isMobile();
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
  	setToast(msg: string){
  		this.toastTimer && clearTimeout(this.toastTimer);
  		this.toastMessage = msg;
  		this.toastTimer = setTimeout(()=>{
  			this.toastMessage = ''
  		}, 2000);
  	}

    //获取热词列表
    setHotWordList(hotWordList: Array<any>){
        this.hotWordList = hotWordList; 
    }
}
