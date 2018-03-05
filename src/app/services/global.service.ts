import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
	public isLoading: boolean = false;
	public toastMessage: string = '';
  	constructor() { }
  	setLoadingState(bool: boolean){
  		this.isLoading = bool;
  	}
}
