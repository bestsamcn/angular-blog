import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ToastComponent } from './common/toast/toast.component';
import { LoadingComponent } from './common/loading/loading.component';
import { BackTopComponent } from './common/back-top/back-top.component';
import { BackTopDirective } from './common/back-top/back-top.directive';


@NgModule({
    declarations: [
        AppComponent,
        CommonComponent,
        HeaderComponent,
        FooterComponent,
        ToastComponent,
        LoadingComponent,
        BackTopComponent,
        BackTopDirective
    ],
    imports: [
        BrowserModule,
        RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}