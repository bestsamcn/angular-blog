import { Directive, ElementRef, Input } from '@angular/core';
import $$ from '../utils';


/**
 * sidebarScroll 侧边栏滚动指令
 */
@Directive({ selector: '[sidebarScroll]' })
export class SidebarScrollDirective {
	private $$: any = $$;
    constructor(el: ElementRef){
    	this.scroll(el.nativeElement);
    }
    scroll(el){
		let _body = document.body;
		let _pNode = el.parentNode;
		// return
		el.slideBar = ()=>{
			//滚动的极限距离
			let h: number = parseInt(_pNode.offsetHeight) - parseInt(el.offsetHeight)-20;
			let mainOffsetTop = parseInt(_pNode.offseTop);
			let mainHeight = parseInt(_pNode.offsetHeight);
			let slideBarHeight =  parseInt(el.offsetHeight) - 40 ;
			let slideBarIntOffsetTop = 20;
			let slideFunc = function() {
				let	scrollTop: number = _body.scrollTop;
	            let slideBarOffsetTop: number = el.offsetTop;
	            let slideBarTop  = parseInt(el.style.top) || 0;

	            //如果侧边栏和主体只差小于侧边栏的原始offsetTop就不滚动
	            if(h < slideBarIntOffsetTop){
	            	return false;
	            }
				// let aniDistant=Math.min( ( Math.max( ( -mainOffsetTop, ( scrollTop - slideBarOffsetTop + slideBarTop)))), (mainHeight - slideBarHeight ) );
				let aniDistant= Math.min(  scrollTop , (mainHeight - slideBarHeight ) );
				//
				if (aniDistant > h) {
					aniDistant = h
				};
				if (_body.scrollTop > slideBarIntOffsetTop ) {
					$$.moveStart(el, {'top':aniDistant});
				} else {
					$$.moveStart(el, {'top':10});
				}
			}
			window.addEventListener('scroll', slideFunc);
			document.addEventListener('resize', slideFunc);
		}
		setTimeout(()=>{
			el.slideBar()
		}, 500)
    }
}


/**
 * bakcTop 返回顶部指令
 */
@Directive({
	selector:'[backTop]'
})
export class BackTopDirective {
	constructor(elementRef: ElementRef){
		let that: any = this
		setTimeout(()=>{
			$$.toScrollHeight(0, that.elementRef.nativeElement);
		}, 500)
	}
}
