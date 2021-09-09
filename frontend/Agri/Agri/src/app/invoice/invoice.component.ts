import { Component, OnInit } from '@angular/core';
//import { CartserviceService } from '../service/cartservice.service';
import { PaymentService } from '../services/payment.service';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  public Arraybill:any=[];
  public Amount=0;

  

  constructor(/*private cart:CartserviceService,*/private bill:PaymentService) { }

  ngOnInit(): void {

   // this.Arraybill=this.cart.cartCrops;
    this.Amount=this.bill.bill;
    
   
  }

}
