import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import {MatGridListModule} from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatMenuModule} from '@angular/material/menu';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { SliderModule } from 'angular-image-slider';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ProductComponent } from './product/product.component';
import { PaymentCheckoutComponent } from './payment-checkout/payment-checkout.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
   
    HeaderComponent,
    HomeComponent,
    CategoryComponent,
    DashboardComponent,
    SliderComponent,
    FooterComponent,
    ProductComponent,
    PaymentCheckoutComponent,
    ViewCartComponent,
    ShippingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    SliderModule,
    MatCarouselModule.forRoot(),
    SlickCarouselModule,
    MatCardModule,
    MatDividerModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule
  ],
  providers: [],
  exports:[MatInputModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
