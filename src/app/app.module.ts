import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';


import { ROUTES } from './config/config.routes';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES),
        //引入布局模块，方便app.component.ts使用
        LayoutModule,
        HomeModule
    ],
    
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}