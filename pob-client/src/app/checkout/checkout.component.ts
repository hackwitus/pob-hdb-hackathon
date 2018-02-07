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

function checkUser() {
  var url = "https://pod-hdb-api.herokuapp.com/customer/:phoneNumber";
  console.log("Starting code");
  dbGetAsync(url, displayData);
}

function dbGetAsync(url, callback) {
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

  if (data.length == 0) {
    //present user creation screen
  }

  // data.forEach(number) {
  //
  //   if (document.getElementById('#phoneNumber') == number) {
  //     //present checkout screen
  //   }
  //   //present user creation screen
  // }
   console.log(data[0].name == "Raspberry Pi 3");
}
