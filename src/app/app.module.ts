import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,
        //引入布局模块，方便app.component.ts使用
        LayoutModule
    ],
    
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}