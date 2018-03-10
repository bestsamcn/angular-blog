import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
import { CommentComponent } from './comment/comment.component';
import { EmojiComponent } from './emoji/emoji.component';

@NgModule({
	imports: [
		CommonModule,
		PipeModule,
		LayoutModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule
	],
	exports: [
		ListComponent,
		ArticleComponent
	],
	declarations: [
		ArticleComponent,
		ListComponent,
		AutoSizeDirective,
		DetailComponent,
		CommentComponent,
		EmojiComponent
	],
	providers:[ArticleService]
})
export class ArticleModule {}
