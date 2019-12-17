import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BreadProductComponent } from './bread-product/bread-product.component';
import { FruitsProductComponent } from './fruits-product/fruits-product.component';
import { DairyProductComponent } from './dairy-product/dairy-product.component';
import { SpicesProductComponent } from './spices-product/spices-product.component';
import { VegetablesProductComponent } from './vegetables-product/vegetables-product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BreadProductComponent,
    FruitsProductComponent,
    DairyProductComponent,
    SpicesProductComponent,
    VegetablesProductComponent,
    ShoppingCartComponent,
    UserProfileComponent,
    LoginComponent,
    HeaderComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
