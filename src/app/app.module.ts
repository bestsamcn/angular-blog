import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

//services
import { GlobalService } from './services/global.service';
import { Request } from './utils/request';

//route
import { ROUTES } from './config/config.routes';

//interceptor
import { AjaxInterceptor } from './interceptor';

//modules
import { ArticleModule } from './modules/article/article.module';
import { LayoutModule } from './modules/layout/layout.module';
import { HomeModule } from './modules/home/home.module';

//components
import { AppComponent } from './app.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { HomeComponent } from './modules/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES),
        //引入布局模块，方便app.component.ts使用
        LayoutModule,
        HomeModule,
        ArticleModule
    ],
    exports:[
    ],
    providers: [
        GlobalService, 
        Request, 
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AjaxInterceptor,
            multi: true,
        }
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    bootstrap: [AppComponent]
})
export class AppModule {}