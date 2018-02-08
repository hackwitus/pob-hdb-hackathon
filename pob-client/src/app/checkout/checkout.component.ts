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

  checkUser() {
    console.log("Starting code");

    var url = "https://pod-hdb-api.herokuapp.com/customers/:phoneNumbe";

    dbGetAsync(url, displayData);
 }
}


function dbGetAsync(url, callback) {
  console.log('Hi')
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(JSON.parse(xmlHttp.responseText));
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
}

var displayData = function(data) {
  console.log("got the data!");
  var input = <HTMLInputElement>document.getElementById('phoneNumber');
  console.log('input # '+input.value);

  if (data.length == 0) {
    console.log('no users found');
    //present user creation screen
  }

  Object.keys(data).forEach(function(number) {
    if (document.getElementById('#phoneNumber') == data[number]) {
      console.log('user found');
      //present checkout screen
    }
  });
  console.log('user not found');
    //present user creation screen
}
