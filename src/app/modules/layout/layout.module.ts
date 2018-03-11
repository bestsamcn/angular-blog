import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToastComponent } from './toast/toast.component';
import { LoadingComponent } from './loading/loading.component';
import { BacktopComponent } from './backtop/backtop.component';

//directives
import { BacktopDirective, ShouldShowTopDirective } from '../../directives/index.directive';

//services
import { HomeService } from '@app/services/guest/home.service';
import { MenuComponent } from './menu/menu.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        ToastComponent,
        LoadingComponent,
        BacktopComponent,
        BacktopDirective,
        ShouldShowTopDirective,
        MenuComponent
    ],
    imports: [
    	CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        ToastComponent,
        LoadingComponent,
        BacktopComponent,
        MenuComponent
    ],
    providers: [HomeService]
})
export class LayoutModule {}