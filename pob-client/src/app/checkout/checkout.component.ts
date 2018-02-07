import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

var isUser = false;

  var checkUser = new Promise (
    function(userExists, userNon){
      //check number in database
      if (isUser) {
        //direct to checkout
        //GET: /customers/:phoneNumber
      }
      //return userExists, direct to next page
      else {
        userNon();
        //direct user to input information
        //POST: `/customers/new`
        //body: {
        //name: (String),
        //email: (String),
        //phoneNumber: (String)
        //}
    }
    }
  )
