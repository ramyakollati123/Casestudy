import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private pay:PaymentService) { }

  public submitted=false;
  public message="";
  public price=0;

  ngOnInit(): void {
    
    this.price=this.pay.bill

  }

  payform=new FormGroup({
    holdername:new FormControl("",[]),
    cardnumber:new FormControl("",[]),
    ifsccode:new FormControl("",[]),
    amount:new FormControl(this.pay.bill,[]),
  })

  addpay()
  
  {
    this.submitted=true;
     this.pay.payto(this.payform.value);

     this.message="Payment Successfull"; 
     console.log(this.message);
     console.log(this.payform.value.holdername)  
  }

}
