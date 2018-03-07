import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CategoryComponent } from './category/category.component';
import { LayoutModule } from '../layout/layout.module';
import { RankComponent } from './rank/rank.component';
import { TagComponent } from './tag/tag.component';
import { HttpClientModule } from '@angular/common/http';

//管道模块
import { PipeModule } from '@app/pipes/pipe.module';

//引入文章模块
import { ArticleModule } from '../article/article.module';

//服务
import { HomeService } from '@app/services/guest/home.service';


import { SidebarScrollDirective } from '../../directives/index.directive';

@NgModule({
	declarations:[
		HomeComponent,
		CategoryComponent,
		RankComponent,
		TagComponent,
		SidebarScrollDirective,

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