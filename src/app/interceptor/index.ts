import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { GlobalService } from '../services/global.service';

@Injectable()
export class AjaxInterceptor implements HttpInterceptor {
	constructor(globalService: GlobalService){
		this.globalService = globalService;
	}
	intercept(req: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {
		const authReq = req.clone({headers: req.headers.set('token', 'asdfasdf')});
		this.globalService.setLoadingState(true);
		return next.handle(authReq)
		.do((event: HttpEvent<any>)=> { 
			if(event instanceof HttpResponse){
				//拦截请求后：响应成功//成功loading结束
				this.globalService.setLoadingState(false);
			}
		},(err: any)=>{ 
			if(err instanceof HttpErrorResponse){
				///拦截请求后：错误处理//err loading结束
				this.globalService.setLoadingState(false);
				return Observable.throw(err);
			}
		})
	}
}