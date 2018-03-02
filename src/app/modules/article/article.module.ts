import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DateFormatPipe, DateDescPipe, TransNumPipe } from '../../pipes/index.pipe';

@NgModule({
	imports: [
		CommonModule
	],
	exports: [
		ListComponent
	],
	declarations: [
		ListComponent,
		DateFormatPipe,
		DateDescPipe,
		TransNumPipe
	]
})
export class ArticleModule {}
