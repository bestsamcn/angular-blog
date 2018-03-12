import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FACE_URL } from '@app/config/config.global';
import { flyInOut, slideInOut } from '@app/utils/animate';

@Component({
	selector: 'article-emoji',
	templateUrl: './emoji.component.html',
	styleUrls: ['./emoji.component.css'],
	animations: [flyInOut, slideInOut]
})
export class EmojiComponent implements OnInit {
	emojiList = [];
	FACE_URL = FACE_URL;
	@Output() onFaceClick = new EventEmitter();
	@Input() shouldShowFace = false;
	constructor() {}
	init() {
		for (var i = 1; i <= 48; i++) {
			this.emojiList.push(i);
		}
	}
	selectFace(item: any) {
		this.onFaceClick.emit(item);
	}
	ngOnInit() {
		this.init();
	}

}