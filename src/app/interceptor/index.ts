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
		const authReq = req.clone({headers: req.headers.set('token', this.globalService.token)});
		this.globalService.setLoadingState(true);
		return next.handle(authReq)
		.mergeMap((event: HttpEvent<any>)=> { 
			if(event instanceof HttpResponse &&  (event.status !== 200 && event.status !== 304 && event.body.retCode !== 0)){
				this.globalService.setToastMessage(event.body.message || '出错了');
				return Observable.create(observer => observer.error(event));
			}
			this.globalService.setLoadingState(false);
			return Observable.create(observer => observer.next(event));
		})
		.catch((res: HttpResponse<any>) => {
            switch (res.status) {
                case 401:
                    // 权限处理
                    break;
                case 200:
                    // 业务层级错误处理
                    this.notifySrv.error('业务错误', `错误代码为：${res.body.code}`);
                    break;
                case 404:
                    this.notifySrv.error('404', `API不存在`);
                    break;
            }
            // 以错误的形式结束本次请求
            return Observable.throw(res);
        })
	}
}