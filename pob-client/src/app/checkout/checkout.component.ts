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



function dbGetAsync(url, callback) {
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
}

//var isUser = false;

var url = "https://pod-hdb-api.herokuapp.com/customers/:phoneNumber";

$(document).ready(function() {
  dbGetAsync(url, displayData());
});

function displayData(data) {
  console.log(data);
}

  // function checkUser($('#phoneNumber')) {
  //   return new Promise((resolve, reject) => {
  //     var url = "https://pod-hdb-api.herokuapp.com/customers/:phoneNumber";
  //     dbGetAsync(url, callback);
  //   })
  // }


   // = new Promise (
   //  function(userExists, userNon){
   //    dbGetAsync(url, checkNumber);
   //    if (isUser) {
        //direct to checkout
        //GET: /customers/:phoneNumber
      // }
      //return userExists, direct to next page
      // else {
      //   userNon();
        //direct user to input information
        //POST: `/customers/new`
        //body: {
        //name: (String),
        //email: (String),
        //phoneNumber: (String)
        //}
  //   }
  //   }
  // )
