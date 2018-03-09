import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


//modules
import { LayoutModule } from '../layout/layout.module';

//servives
import { ArticleService } from '@app/services/guest/article.service';

//pipes
import { PipeModule } from '@app/pipes/pipe.module';

//directives
import { AutoSizeDirective } from '@app/directives/index.directive';

//components
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { ArticleComponent } from './article.component';

@NgModule({
	imports: [
		CommonModule,
		PipeModule,
		LayoutModule,
		RouterModule
	],
	exports: [
		ListComponent,
		ArticleComponent,
		DetailComponent
	],
	declarations: [
		ArticleComponent,
		ListComponent,
		AutoSizeDirective,
		DetailComponent
	],
	providers:[ArticleService]
})
export class ArticleModule {}
