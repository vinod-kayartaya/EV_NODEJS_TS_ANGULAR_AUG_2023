import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ViewCartComponent } from './components/view-cart/view-cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddToCartButtonComponent } from './components/add-to-cart-button/add-to-cart-button.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// route configuration; can be imported from another file as well
const routesConfig: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductListComponent,
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'view-cart',
    component: ViewCartComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    ViewCartComponent,
    PageNotFoundComponent,
    AddToCartButtonComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, // @angular/forms
    RouterModule.forRoot(routesConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
