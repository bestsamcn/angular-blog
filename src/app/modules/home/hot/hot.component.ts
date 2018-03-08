import { Component, OnInit } from '@angular/core';
import { GlobalService } from '@app/services/global.service';

@Component({
  selector: 'home-hot',
  templateUrl: './hot.component.html',
  styleUrls: ['./hot.component.css']
})
export class HotComponent implements OnInit {

  constructor(public globalService: GlobalService) { }

  ngOnInit() {
  }

}
