'use strict';

var allStores = [];

var hours = 14;



function StoreConstructor  (name,min,max,avgCookieSale,hoursOpenInt,startingHour,) {
  this.name = name;
  this.min = min;
  this.max = max; 
  this.avgCookieSale = avgCookieSale;
  this.hoursOpenInt = hoursOpenInt;
  this.startingHour = startingHour;
  this.cookiesPerHourArrAndTotal = [];
  this.stringHoursArr = [];

  


  //learned this one in code review in class. 
  allStores.push(this);

}



  StoreConstructor.prototype.randomCustomersPerHour = function(){
    let randoCust = Math.random();
    let multed = Math.floor(randoCust * (this.max - this.min) + this.min);
    return multed;
    };
//declared StoreConstructor.prototype.totalCookie first so that I can call it in figureCookiesPerHourAndTotal
  StoreConstructor.prototype.totalCookie = function(){
    let cookiePlusser = 0;  
    for (var cookie in this.cookiesPerHourArrAndTotal){
      cookiePlusser += this.cookiesPerHourArrAndTotal[cookie];
      }  
      return cookiePlusser;
    }; 

    StoreConstructor.prototype.figureCookiesPerHourAndTotal = function(){
      for (var i = 0; i < this.hoursOpenInt; i ++){
      var customersPH = (Math.floor(this.randomCustomersPerHour() * this.avgCookieSale));  
      this.cookiesPerHourArrAndTotal.push(customersPH);
    }
  this.cookiesPerHourArrAndTotal.push(this.totalCookie());  
};


  
    StoreConstructor.prototype.hourFigurer = function(hoursOpenInt,startingHour){ 
    let am = 'am';
    let pm = 'pm';
    let currentHour = startingHour;
    let stringy;
    for(var i = 0; i < hoursOpenInt; i ++)  {
      if(currentHour === 24){
        currentHour = 0;
      }
      
      if(currentHour < 12){ 
        
        if (currentHour == 0){
          stringy ='Midnight';  
          }
      else    
        stringy = `${currentHour} ${am}`
      }  
      else if (currentHour == 12){
      stringy = 'Noon';
      }
      else if (currentHour > 12){
      stringy = `${currentHour - 12} ${pm}`
      }
      this.stringHoursArr.push(stringy);
      currentHour++; 
      }  
    };

StoreConstructor.prototype.renderer = function(){
  let elCreations = [];
  var grabber = document.getElementById('grabMe');
//commented out uls and lis

  // for(var i = 0; i < this.cookiesPerHourArrAndTotal.length ; i ++){
  //   elCreations[i] = document.createElement('li');
  //   elCreations[i].id = i;
  //   let total = this.cookiesPerHourArrAndTotal[this.cookiesPerHourArrAndTotal.length -1];

  //   if(this.cookiesPerHourArrAndTotal[i] !== total){
  //     elCreations[i].textContent = `remarkably, at ${this.stringHoursArr[i]} we sold ${this.cookiesPerHourArrAndTotal[i]} cookies`;
  //   }
  //   else if(this.cookiesPerHourArrAndTotal[i] === total){
  //     elCreations[i].textContent = `and the grand total is ${total}`;
  //   }
  //   grabber.appendChild(elCreations[i]);
  // }
};
    // last time i tried a hard coded version of time, this time i'll try using this.time

    // console.log(allStores[store].cookiesPerHourArrAndTotal[hour]); 


    StoreConstructor.prototype.totalCookiesAtHour = function() {
      
      for (var hour = 0; hour < this.hoursOpenInt; hour ++){
        console.log(hour);
         for (var store = 0; store < allStores.length; store ++){
      // so the outer loop will stop at each while the inner loop will cycle through all the stores, next hour, all stores, etc...
      console.log(allStores[store].cookiesPerHourArrAndTotal[hour]); 
  
        }
      }
    }

  // the question is in the console.log this is more pseudo code since it doesn't work as real code, but how to think about making something like this work, where in the inner for loop store iterates through allStores while hour holds steady until all stores have looped and the outer for loop ++s by 1, then the cycle repeats. 


// StoreConstructor.prototype.caller was originally here
   StoreConstructor.prototype.caller = function(){
this.hourFigurer(this.hoursOpenInt, this.startingHour);
this.figureCookiesPerHourAndTotal();
this.totalCookiesAtHour();
//this.renderer() was for the uls and lis
// this.renderer();
};

// //they all fire, 

//   //what's the best way to call these functions? 
  // StoreConstructor.figureCookiesPerHourAndTotal();
//   //this is the only place it's called. 
//   StoreConstructor.hourFigurer(StoreConstructor.hoursOpenInt, StoreConstructor.startingHour);

  // storeRenderer();

  //min,max,avgCookieSale,hoursOpenInt,startingHour
//in code review we learned that the named variables for constructing new stores is unneccesary. 
// the new StoreConstructor will be good enough. 

var pike1 = new StoreConstructor('pike1',23,65,6.3,14,6);
var seaTac = new StoreConstructor('seaTac', 3,124,1.2,14,6);
var seaCenter = new StoreConstructor('seaCenter', 11,38, 3.7,14,6);
var capHill = new StoreConstructor('capHill',20,38,2.3,14,6);
var alki = new StoreConstructor('alki', 2,16,4.6,14,6);


// pike1,seaTac,seaCenter,capHill,alki


allStores.forEach(function(store){
store.caller();
});


// and creating another function that renders tables
//eventually wrap the below in a function...


var tabling = document.createElement('TABLE');
tabling.setAttribute('id','myTable');
document.body.appendChild(tabling);

var makeHeaders = [];
var cellArr = [];
var getTabling = document.getElementById('myTable');
var rowHeader = document.createElement('tr');
getTabling.appendChild(rowHeader);

var headerFunction = function(store){


// so I want to place a placeholder here but obeviously this is the wrong way yo do it...
// var placeholderEl = document.createElement('th');
// var placeholderContent = document.createTextNode('what shows up?');
// placeholderEl.appendChild(placeholderContent);
// getTabling.appendChild(placeholderEl);
// console.log(placeholderEl);

// headers
for (var i = -1; i < store.stringHoursArr.length; i ++){  
  makeHeaders[i] = document.createElement('th');
  cellArr[i] = document.createTextNode('cell');
  cellArr[i].textContent = store.stringHoursArr[i];
  makeHeaders[i].appendChild(cellArr[i]);
  rowHeader.appendChild(makeHeaders[i]);
  }
var totalEl = document.createElement('th');
var totalContent = document.createTextNode('total');
rowHeader.appendChild(totalContent);
}

//hard coding a single store for now
headerFunction(allStores[0]);


//footerfunction
// var footerFunctionValues = function() {
// for (var i = 0; i < allStores.length; i ++){

// }

// }


//shows up
// var getTabling = document.getElementById('myTable');
// var makeHeader = document.createElement('th');
//  makeHeader.textContent = 'what shows up?';
// getTabling.appendChild(makeHeader);


// var placeholder = document.createTextNode('____');
//  


// var header = tabling.createTHead(); 
// var headerRow = header.insertRow(0);
// var headerCell = headerRow.insertCell(0);
// headerCell.innerHTML = ('this is the header');

var tableAppender = function(store){
  
var rowing = [];
var rowing = document.createElement('TR');
  rowing.setAttribute('id', store.name);
  document.getElementById('myTable').appendChild(rowing);

// let storeContents = Object.values(store);
let storeContents = store.cookiesPerHourArrAndTotal;

let cells = [];
let contents = [];

// var i = 0; i < storeContents.length; i ++
// for(var i in storeContents)
for (var i = -1; i < storeContents.length; i ++){
  // console.log(storeContents[i], 'this one works as expected');
if(i === -1){
var nameOfStore = store.name;
var nameOfStoreEl = document.createElement('td');
var nameOfStoreContent = document.createTextNode(nameOfStore);
nameOfStoreEl.appendChild(nameOfStoreContent);
rowing.appendChild(nameOfStoreEl);
}

// at first I didn't have this else statement and it resulted in a working table except for the 0th index was returning undefined... the else statement fixed it. 
else {
cells[i] = storeContents[i];
cells[i] = document.createElement('TD');
contents[i] = document.createTextNode(storeContents[i]);
cells[i].appendChild(contents[i]); 
rowing.appendChild(cells[i]);
  //  console.log(storeContents[i]);
  }
}

// var cellData = document.createElement('TD');
// var content = document.createTextNode('cell');
// cellData.appendChild(content);
// document.getElementById('firstRowing').appendChild(cellData);
    
  // }
  // for (var i in allStores){
  // tableAppender(allStores[i]);
  // }
  
  }

  // tableAppender(store);

for (var i = 0; i < allStores.length; i ++){
  // console.log(allstores[store]);
tableAppender(allStores[i]);
}

//following along to examples from class except ignoring the body elements since for now
var newStoreForm = document.getElementById('containerForm');

var handleNewStore = function (event){
event.preventDefault();
event.stopPropagation();
var storeName = event.target['store-name'].value;
var minCust = parseInt(event.target['minimum-customers'].value);
var maxCust = parseInt( event.target['maximum-customers'].value);
var avgCooky = parseFloat( event.target['average-cookies-sold-per-hour'].value);
var hoursOpen = parseInt(event.target['hours-open'].value);
var startingHour = parseInt(event.target['starting-hour'].value);


// name,min,max,avgCookieSale,hoursOpenInt,startingHour
var newStore = new StoreConstructor(storeName,minCust,maxCust,avgCooky,hoursOpen,startingHour);

//trying to append new store 

console.log(newStore);

newStore.caller();
tableAppender(newStore);

// allStores.push(new Store);
};

newStoreForm.addEventListener('submit', handleNewStore);







// var row = tabling.insertRow(0);
// var cell = row.insertCell(0);
// cell.innerHTML = 'new cell';
