import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CategoryComponent } from './category/category.component';
import { LayoutModule } from '../layout/layout.module';
import { RankComponent } from './rank/rank.component';
import { TagComponent } from './tag/tag.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations:[
		HomeComponent,
		CategoryComponent,
		RankComponent,
		TagComponent
	],
	imports: [
		CommonModule,
		LayoutModule,
		HttpClientModule
	],
	exports:[
		HomeComponent,
		CategoryComponent,
	]
})
export class HomeModule {}