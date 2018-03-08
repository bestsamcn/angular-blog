import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ArticleComponent } from './article.component';
import { PipeModule } from '@app/pipes/pipe.module';
import { AutoSizeDirective } from '@app/directives/index.directive';

@NgModule({
	imports: [
		CommonModule,
		PipeModule
	],
	exports: [
		ListComponent
	],
	declarations: [
		ArticleComponent,
		ListComponent,
		AutoSizeDirective
	]
})
export class ArticleModule {}
