import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { IndexPipe } from '../pipes/index.pipe';

@NgModule({
	imports: [
		CommonModule
	],
	exports: [
		ListComponent
	],
	declarations: [
		ListComponent,
		IndexPipe
	]
})
export class ArticleModule {}
