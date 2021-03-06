import { Component, OnInit } from '@angular/core';
import { HomeService } from '@app/services/guest/home.service';
import { POSTER_URL } from '../../../config/config.global';

@Component({
	selector: 'home-rank',
	templateUrl: './rank.component.html',
	styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {
	activeIndex = 1;
	hotList = [];
	commentList = [];
	readNumList = [];
	latestList = [];
	POSTER_URL = POSTER_URL;
	constructor(public homeService: HomeService) {}
	onTabChange(n:number): void{
		this.activeIndex = n;
	}
	getHotList(){
        this.homeService.getHotList().then((res: any)=>{
            this.hotList = res.data;
        });
    }
    getLatestComent(){
    	this.homeService.getLatestComent().then((res: any)=>{
            this.commentList = res.data;
        });
    }
    getReadNumAritlce(){
    	this.homeService.getReadNumAritlce().then((res: any)=>{
            this.readNumList = res.data;
        });
    }
    getLatestAritlce(){
    	this.homeService.getLatestAritlce().then((res: any)=>{
            this.latestList = res.data;
        });
    }
	ngOnInit() {
		this.getHotList();
		this.getLatestComent();
		this.getReadNumAritlce();
		this.getLatestAritlce();
	}

}