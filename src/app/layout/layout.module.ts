import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToastComponent } from './toast/toast.component';
import { LoadingComponent } from './loading/loading.component';
import { BackTopComponent } from './back-top/back-top.component';
import { BackTopDirective } from './back-top/back-top.directive';


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        ToastComponent,
        LoadingComponent,
        BackTopComponent,
        BackTopDirective
    ],
    imports: [
    	CommonModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        ToastComponent,
        LoadingComponent,
        BackTopComponent,
        BackTopDirective
    ],
    providers: []
})
export class LayoutModule {}