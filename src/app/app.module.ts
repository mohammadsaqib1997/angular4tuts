import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {MyNewComComponent} from './my-new-com/my-new-com.component';
import {MembersComponent} from './members/members.component';
import {ProductsComponent} from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: "members", component: MembersComponent},
    { path: "products", component: ProductsComponent},
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        MyNewComComponent,
        MembersComponent,
        ProductsComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
