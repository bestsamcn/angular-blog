import { Directive, ElementRef, Input, OnChanges, OnInit, OnDestroy } from '@angular/core';
import $$ from '../utils';

/**
 * sidebarScroll 侧边栏滚动指令
 */
@Directive({ selector: '[sidebarScroll]' })
export class SidebarScrollDirective implements OnChanges, OnDestroy{
	private $$: any = $$;
	//检测父级容器变化，以便触发ngOnChanges钩子
	@Input() sidebarScroll:number;
	slideFunc: any;
    constructor(public el: ElementRef){
    	this.scroll(el.nativeElement);
    }
    ngOnChanges(){
    	this.scroll(this.el.nativeElement);
    }
    ngOnDestroy(){
		window.removeEventListener('scroll', this.slideFunc);
		document.removeEventListener('resize', this.slideFunc);
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
			this.slideFunc = function() {
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
			window.addEventListener('scroll', this.slideFunc);
			document.addEventListener('resize', this.slideFunc);
		}
		setTimeout(()=>{
			el.slideBar()
		}, 500)
    }
}


/**
 * bakcTop 是否显示返回顶部
 */
@Directive({
	selector:'[shouldShowTop]'
})
export class ShouldShowTopDirective implements OnChanges, OnDestroy {
	//检测父级容器变化，以便触发ngOnChanges钩子
	@Input() shouldShowTop: number;
	@Input() distance: number;
	temp: any;
	constructor(public elementRef: ElementRef){
		this.showTop(elementRef.nativeElement)
	}
	ngOnChanges(){
    	this.showTop(this.elementRef.nativeElement);
    }
    ngOnDestroy(){
		window.removeEventListener('scroll',this.temp);
    }
	showTop(el){
		let nScrollTop:number, nClientHeight: number = document.documentElement.clientHeight || document.body.clientHeight;
		let elClass: string=el.class;
        this.temp = ()=>{
        	nScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	        if (nScrollTop > this.distance) {
	        	el.className="go-top-btn show";
	        } else {
	        	el.className="go-top-btn"
	        }
        }
        this.temp();
        window.addEventListener('scroll',this.temp);
	}
}

/**
 * bakcTop 返回顶部指令
 */
@Directive({
	selector:'[backtop]'
})
export class BacktopDirective {
	constructor(elementRef: ElementRef){
		setTimeout(()=>{
			$$.toScrollHeight(0, elementRef.nativeElement);
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
		let img:any = new Image();
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

