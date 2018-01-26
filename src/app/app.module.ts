import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        LayoutModule
    ],
    
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}