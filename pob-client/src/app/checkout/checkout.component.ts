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

    var url = "https://pod-hdb-api.herokuapp.com/customers/:phoneNumber";

    dbGetAsync(url, displayData);
  }

  createUser() {
    console.log("Creating user..")
    var name = <HTMLInputElement>document.getElementById('name');
    console.log('name: ' + name.value);
    var email = <HTMLInputElement>document.getElementById('email');
    console.log('email: ' + email.value);
    var number = <HTMLInputElement>document.getElementById('number');
    console.log('phone: ' + number.value);

    var url = "https://pod-hdb-api.herokuapp.com/customers/new";
    var customer = { name: `${name}`, email: `${email}`, phoneNumber: `${number}` };

    dbAddUsr(url, customer, addConfirm);
  }
}

var addConfirm = function(data) {
  console.log(data);
}

function dbAddUsr(url, customer, callback) {
  console.log('POST')

  var http = new XMLHttpRequest();

  http.open("POST", url, true);

  http.setRequestHeader('Content-type', url);

  http.onreadystatechange = function() {
    if (http.readyState == XMLHttpRequest.DONE && http.status == 200)
      callback(JSON.parse(http.responseText));
  }


  // true for asynchronous
  http.send();
  http.send(null);
}


function dbGetAsync(url, callback) {
  console.log('GET')

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
  console.log('input # ' + input.value);

  if (data.length == 0) {
    console.log('no users found');
    //present user creation screen
    var initCheckout = document.getElementById("initCheckout");
    initCheckout.classList.add("hidden");

    var createUsr = document.getElementById("createUsr");
    createUsr.classList.remove("hidden");
  }

  Object.keys(data).forEach(function(number) {
    if (document.getElementById('#phoneNumber') == data[number]) {
      console.log('user found');
      //present checkout screen
      var initCheckout = document.getElementById("initCheckout");
      initCheckout.classList.add("hidden");

      var checkout = document.getElementById("checkout");
      checkout.classList.remove("hidden");
    }
    console.log('user not found');

    var initCheckout = document.getElementById("initCheckout");
    initCheckout.classList.add("hidden");

    var createUsr = document.getElementById("createUsr");
    createUsr.classList.remove("hidden");
  });

  //present user creation screen
}
