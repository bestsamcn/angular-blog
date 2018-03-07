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
	POSTER_URL = POSTER_URL;
	constructor(public homeService: HomeService) {}
	onTabChange(n:number): void{
		this.activeIndex = n;
	}
	getHotList(){
        this.homeService.getHotList().then(res=>{
            this.hotList = res.data;
        });
    }
    getLatestComent(){
    	this.homeService.getLatestComent().then(res=>{
            this.commentList = res.data;
        });
    }
    getReadNumAritlce(){
    	this.homeService.getReadNumAritlce().then(res=>{
            this.readNumList = res.data;
        });
    }
	ngOnInit() {
		this.getHotList();
		this.getLatestComent();
		this.getReadNumAritlce();
	}

}