import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ManageCropComponent } from './components/manage-crop/manage-crop.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './helper/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthorisedLayoutComponent } from './layout/authorised/authorised-layout/authorised-layout.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PaymentComponent } from './payment/payment.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorisedLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      {
        path: 'home',
        component: HomepageComponent,
      },
      
      {
        path: 'manageCrop',
        component: ManageCropComponent,
      },
     

    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path:'aboutus',
    component:AboutusComponent,
  },
 { path:'payment',
  component:InvoiceComponent,},
  {path:'pay',
component:PaymentComponent,},
  {path:'order',
component:OrderComponent,},

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
