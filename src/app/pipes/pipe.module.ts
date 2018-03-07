import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
//pipes
import { DateFormatPipe, DateDescPipe, TransNumPipe, TextEllipsisPipe } from './index.pipe';

@NgModule({
	imports: [
		BrowserModule
	],
	exports:[
		DateFormatPipe,
        DateDescPipe,
        TransNumPipe,
        TextEllipsisPipe
	],
	declarations: [
		DateFormatPipe,
        DateDescPipe,
        TransNumPipe,
        TextEllipsisPipe
	]
})
export class PipeModule { }
