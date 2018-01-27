import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [HomeComponent, CategoryComponent]
})
export class HomeModule {}