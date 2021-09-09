import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {ToastModule} from 'primeng/toast';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorisedLayoutComponent } from './layout/authorised/authorised-layout/authorised-layout.component';
import { AuthorisedSideNavComponent } from './layout/authorised/authorised-side-nav/authorised-side-nav.component';
import { AuthorisedSideNaveTogglerComponent } from './layout/authorised/authorised-side-nave-toggler/authorised-side-nave-toggler.component';
import { AuthorisedTopNavComponent } from './layout/authorised/authorised-top-nav/authorised-top-nav.component';
import { ContentComponent } from './layout/authorised/content/content.component';
import { ManageCropComponent } from './components/manage-crop/manage-crop.component';
import { EditCropComponent } from './components/manage-crop/edit-crop/edit-crop.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ErrorInterceptor } from './helper/error.interceptor';
import { JwtInterceptor } from './helper/jwt.interceptor';
import { SignupComponent } from './components/signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ResponseInterceptor } from './helper/response.interceptor';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PaymentComponent } from './payment/payment.component';
import { InvoiceComponent } from './invoice/invoice.component';

import { OrderComponent } from './components/order/order.component';



@NgModule({
  declarations: [
    AppComponent,
    
    AuthorisedLayoutComponent,
    AuthorisedSideNaveTogglerComponent,
    AuthorisedSideNavComponent,
    AuthorisedTopNavComponent,
    ContentComponent,
    ManageCropComponent,
    EditCropComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    AboutusComponent,
    PaymentComponent,
    InvoiceComponent,
    
    OrderComponent,
   
    
  
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DynamicDialogModule,
    ToastModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
