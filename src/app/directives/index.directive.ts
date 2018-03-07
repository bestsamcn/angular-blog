import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import $$ from '../utils';

/**
 * sidebarScroll 侧边栏滚动指令
 */
@Directive({ selector: '[sidebarScroll]' })
export class SidebarScrollDirective implements OnChanges{
	private $$: any = $$;
	//检测父级容器变化，以便触发ngOnChanges钩子
	@Input() sidebarScroll:number;
    constructor(public el: ElementRef){
    	this.scroll(el.nativeElement);
    }
    ngOnChanges(){
    	this.scroll(this.el.nativeElement);
    }
    scroll(el){
		let _body = document.body;
		let _pNode = el.parentNode;
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

/**
 * autoSize 图片自适应
 */
@Directive({
	selector:'[autoSize]'
})
export class AutoSizeDirective implements OnChanges {
	@Input() autoSize:string;
	constructor(public el: ElementRef){
	}
	ngOnChanges(){
		this.setResize(this.el.nativeElement)
	}
	setResize(el){
		let img:Image = new Image();
		img.src = this.autoSize;
		img.onload = function(e:any){

			let w:number = e.path[0].width;
			let h:number = e.path[0].height;
			if(w > h){
				el.style.height = '100%';
				el.style.width = 'initial';
			}else{
				el.style.height = 'initial';
				el.style.width = '100%';
			}
		}
	}
}

