import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { GlobalService } from '@app/services/global.service';

@Injectable()
export class AjaxInterceptor implements HttpInterceptor {
	constructor(public globalService: GlobalService){
	}
	intercept(req: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {
		const authReq = req.clone({headers: req.headers.set('token', this.globalService.token)});
		return next.handle(authReq)
		.mergeMap((event: HttpEvent<any>)=> { 
			//因为这里的回调表示一旦有数据流经过就会触发，所以就算没有返回也会走到这里，所以这里不能做loading控制
			if(event instanceof HttpResponse &&  (event.status !== 200 && event.status !== 304 && event.body.retCode !== 0)){
				this.globalService.setToastMessage(event.body.message || '出错了');
				return Observable.create(observer => observer.error(event));
			}
			return Observable.create(observer => observer.next(event));
		})
		.catch((res: HttpResponse<any>) => {
            switch (res.status) {
                case 401:
                    // 权限处理
                    this.globalService.setToastMessage('你无权限');
                    break;
                case 404:
                	this.globalService.setToastMessage('地址不存在');
                    break;
            }
            // 以错误的形式结束本次请求
           	this.globalService.setToastMessage('发生未知错误');
            return Observable.throw(res);
        })
	}
}