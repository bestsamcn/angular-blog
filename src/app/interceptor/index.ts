import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { GlobalService } from '../app.service';

@Injectable()
export class AjaxInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {
		console.log(GlobalService)
		const authReq = req.clone({headers: req.headers.set('token', 'asdfasdf')});
		 // return next.handle(req)
		return next.handle(authReq)
	}
}