import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//pipes
import { PipeModule } from '@app/pipes/pipe.module';

//modules
import { ArticleModule } from '../article/article.module';
import { LayoutModule } from '../layout/layout.module';

//services
import { HomeService } from '@app/services/guest/home.service';

//directives
import { SidebarScrollDirective } from '../../directives/index.directive';

//components
import { HotComponent } from './hot/hot.component';
import { HomeComponent } from './home.component';
import { CategoryComponent } from './category/category.component';
import { RankComponent } from './rank/rank.component';
import { TagComponent } from './tag/tag.component';

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
		PipeModule,
		RouterModule
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