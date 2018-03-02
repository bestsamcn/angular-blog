import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToastComponent } from './toast/toast.component';
import { LoadingComponent } from './loading/loading.component';
import { BackTopComponent } from './back-top/back-top.component';


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        ToastComponent,
        LoadingComponent,
        BackTopComponent,
    ],
    imports: [
    	CommonModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        ToastComponent,
        LoadingComponent,
        BackTopComponent
    ],
    providers: []
})
export class LayoutModule {}