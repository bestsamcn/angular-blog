import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';
import $$ from '../../../utils';

@Directive({
	selector:'[backTop]'
})
export class BackTopDirective {
	constructor(elementRef: ElementRef, Renderer: Renderer){
		setTimeout(()=>{
			$$.toScrollHeight(0, this.elementRef.nativeElement);
		}, 500)
	}
}
