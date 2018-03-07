import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { PipeModule } from '@app/pipes/pipe.module';


@NgModule({
	imports: [
		CommonModule,
		PipeModule
	],
	exports: [
		ListComponent
	],
	declarations: [
		ListComponent
	]
})
export class ArticleModule {}
