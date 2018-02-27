import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService{
	token = '';
	info = {};
	constructor(){
	}
	getToken(token: string){
		this.token = token;
	}
	getInfo(info: object){
		this.info = info;
	}
}