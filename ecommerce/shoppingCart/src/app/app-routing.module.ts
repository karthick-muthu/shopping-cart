import { ShippingComponent } from './shipping/shipping.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import{ViewCartComponent} from './view-cart/view-cart.component'; 



const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: "full"
},
  
  
{ path: 'cart', component: ViewCartComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'product', component: ProductComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'shipping', component: ShippingComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
