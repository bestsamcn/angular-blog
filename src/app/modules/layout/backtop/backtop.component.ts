import { Component, OnInit } from '@angular/core';
import { HomeService } from '@app/services/guest/home.service';

@Component({
  selector: 'app-backtop',
  templateUrl: './backtop.component.html',
  styleUrls: ['./backtop.component.css']
})
export class BacktopComponent implements OnInit {

  constructor(public homeService: HomeService) { }

  ngOnInit() {
  }

}
