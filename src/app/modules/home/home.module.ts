import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CategoryComponent } from './category/category.component';
import { LayoutModule } from '../layout/layout.module';
import { RankComponent } from './rank/rank.component';
import { TagComponent } from './tag/tag.component';
import { HttpClientModule } from '@angular/common/http';

//pipes
import { PipeModule } from '@app/pipes/pipe.module';

//modules
import { ArticleModule } from '../article/article.module';

//services
import { HomeService } from '@app/services/guest/home.service';

//directives
import { SidebarScrollDirective } from '../../directives/index.directive';
import { HotComponent } from './hot/hot.component';

@NgModule({
	declarations:[
		HomeComponent,
		CategoryComponent,
		RankComponent,
		TagComponent,
		SidebarScrollDirective,
		HotComponent
	],
	imports: [
		CommonModule,
		LayoutModule,
		//引入
		ArticleModule,
		HttpClientModule,
		PipeModule
	],
	exports:[
		HomeComponent,
		CategoryComponent,
	],
	providers:[
		HomeService	
	]
})
export class HomeModule {}