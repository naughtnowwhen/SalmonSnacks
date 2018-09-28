// 'use strict';

// //Store Objects For Sale Page

// var Store = function(name, minCust, maxCust, avgCookieSalePerSale){
//   this.name = name;
//   this.min = minCust;
//   this.max = maxCust;
//   this.avgCookiesPerSale = avgCookieSalePerSale;
//   this.cookiesSoldEachHour = [];
// };

// Store.prototype.calculateCustomersPerHour = function(){
//   var randomAmount = Math.floor(Math.random() * (this.max - this.min) + this.min);
//   console.log(randomAmount);
//   var returny =  Math.round(randomAmount * this.avgCookieSalePerSale);
//   console.log(returny);
//   return returny;
// };

// Store.prototype.calculateCookiesSoldPerHour = function(){
//   for(var i = 0; i < 15; i++){
//     this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
//   }
//   console.log(this.cookiesSoldPerHour);
// };

// Store.prototype.renderHours = function(){
//   this.calculateCookiesSoldPerHour();
//   // console.log(this.calculateCookiesSoldPerHour);
//   var storesContainer = document.getElementById('stores');
//   var headerEl = document.createElement('h2');
//   headerEl.textContent = this.name;
//   storesContainer.appendChild(headerEl);
//   var ulEl = document.createElement('ul');
//   for(var i in this.cookiesSoldEachHour){
//     var listItemEl = document.createElement('li');
//     listItemEl.textContent = this.cookiesSoldEachHour[i];
//     ulEl.appendChild(listItemEl);
//   }

//   storesContainer.appendChild(ulEl);
// };
// var store1 = new Store('1st and Pike', 23, 65, 6.3, []);
// var store2 = new Store('Seatac Airport', 3, 24, 1.2, []);
// var store3 = new Store('Seattle Center', 11, 38, 3.7, []);
// var store4 = new Store('Capitol Hill', 20, 38, 2.3, []);
// var store5 = new Store('Alki', 2, 16, 4.6, []);

// store1.renderHours();