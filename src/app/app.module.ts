import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SellComponent } from './components/sell/sell.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { HelpComponent } from './components/help/help.component';
import { HistoryComponent } from './components/history/history.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { ReturnsComponent } from './components/returns/returns.component';
import { TutorialsComponent } from './components/tutorials/tutorials.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProductComponent,
    CartComponent,
    PaymentComponent,
    ProfileComponent,
    SellComponent,
    FaqsComponent,
    HeaderComponent,
    FooterComponent,
    BenefitsComponent,
    HelpComponent,
    HistoryComponent,
    PaymentMethodComponent,
    ReturnsComponent,
    TutorialsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
