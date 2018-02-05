import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CategoryComponent } from './category/category.component';
import { LayoutModule } from '../layout/layout.module';
import { RankComponent } from './rank/rank.component';
import { TagComponent } from './tag/tag.component';

@NgModule({
	declarations:[
		HomeComponent,
		CategoryComponent,
		RankComponent,
		TagComponent
	],
	imports: [
		CommonModule,
		LayoutModule
	],
	exports:[
		HomeComponent,
		CategoryComponent,
	]
})
export class HomeModule {}