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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routesConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
