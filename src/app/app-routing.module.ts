import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProductComponent } from './components/product/product.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SellComponent } from './components/sell/sell.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { HelpComponent } from './components/help/help.component';
import { HistoryComponent } from './components/history/history.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { ReturnsComponent } from './components/returns/returns.component';
import { TutorialsComponent } from './components/tutorials/tutorials.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'payment-method', component: PaymentMethodComponent },
  { path: 'product', component: ProductComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'sell', component: SellComponent },
  { path: 'benefits', component: BenefitsComponent },
  { path: 'help', component: HelpComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'returns', component: ReturnsComponent },
  { path: 'tutorials', component: TutorialsComponent },
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
