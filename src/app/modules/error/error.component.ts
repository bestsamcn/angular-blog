import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
