import { Component, OnInit } from '@angular/core';

/*@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
          headers=["id","order","price","quantity available"];
         // headers=[id:"any","order","price","quantity available"];
          rows=[{
            "id":"1","order":"apple","price":"30","quantity available":"5"
          },
          {
            "id":"1","order":"apple","price":"30","quantity available":"5"
          }
        ]
  constructor() { }

  ngOnInit(): void {
  }

}*/
//import { Component, OnInit } from '@angular/core';

export interface IOrder {
  name: string;
  gender: string;
  country: string;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
 // constructor(/*private orders: any*/ ){}
  //orders: IOrder[];
  orders: any[] = [];

constructor() { 
   // Initialization inside the constructor
   this.orders = [];
}

  ngOnInit(): void {
    fetch('./assets/order.json').then(res => res.json())
      .then(json => {
        this.orders= json;
      });
  }
}
