import { Routes } from '@angular/router';
import { HomeComponent } from '@app/modules/home/home.component';


//article
import { ArticleComponent } from '@app/modules/article/article.component';
import { DetailComponent } from '@app/modules/article/detail/detail.component';
import { ErrorComponent } from '@app/modules/error/error.component';

export const ROUTES: Routes = [
	{path:'', component:HomeComponent},
	{path:'article', component:ArticleComponent},
	{path:'article/detail/:id', component:DetailComponent},
	{path:'404', component:ErrorComponent},
	{path:'**', redirectTo:'/404'},
] 