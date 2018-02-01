import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CategoryComponent } from './category/category.component';
import { LayoutModule } from '../layout/layout.module';
import { RankComponent } from './rank/rank.component';

@NgModule({
	declarations:[
		HomeComponent,
		CategoryComponent,
		RankComponent
	],
	imports: [
		CommonModule,
		LayoutModule
	],
	exports:[
		HomeComponent,
		CategoryComponent,
	],
	declarations: [HomeComponent, CategoryComponent]
})
export class HomeModule {}