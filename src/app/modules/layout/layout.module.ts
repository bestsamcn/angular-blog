import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToastComponent } from './toast/toast.component';
import { LoadingComponent } from './loading/loading.component';
import { BacktopComponent } from './backtop/backtop.component';


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        ToastComponent,
        LoadingComponent,
        BacktopComponent
    ],
    imports: [
    	CommonModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        ToastComponent,
        LoadingComponent,
        BacktopComponent
    ],
    providers: []
})
export class LayoutModule {}