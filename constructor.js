'use strict';

var allStores = [];
var tableGrabUniversal = document.getElementById('myTable');


var hours = 14;


// ok i learned a good lesson i think, I was moving around the new instantiations, and the prototype, and even when i moved the new instances before the constructor itself, and the prototype too, it didn't matter because no matter where i placed it the prototype worked, therefore i think that placing the new stores right up at the top is a fine idea. 

// I was thinking that it would be a good idea to have have a special branch or master, probably in a more universal spot so that anytime I learn something I can push there so all my lessons are kept in one central spot so that I can refer back to them in a chronological order because right now they're all scattered.

//set up a new repo called insights to do this.

var pike1 = new StoreConstructor('pike1',23,65,6.3,14,6);
var seaTac = new StoreConstructor('seaTac', 3,124,1.2,14,6);
var seaCenter = new StoreConstructor('seaCenter', 11,38, 3.7,14,6);
var capHill = new StoreConstructor('capHill',20,38,2.3,14,6);
var alki = new StoreConstructor('alki', 2,16,4.6,14,6);




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
  

    StoreConstructor.prototype.figureCookiesPerHourAndTotal = function(){
      for (var i = 0; i < this.hoursOpenInt; i ++){
      var customersPH = (Math.floor(this.randomCustomersPerHour() * this.avgCookieSale));
      this.cookiesPerHourArrAndTotal.push(customersPH);
      
      
    }
  this.cookiesPerHourArrAndTotal.push(this.totalCookie());  
};

StoreConstructor.prototype.totalCookie = function(){
  let cookiePlusser = 0;  
  for (var cookie in this.cookiesPerHourArrAndTotal){
    cookiePlusser += this.cookiesPerHourArrAndTotal[cookie];
    }  
    return cookiePlusser;
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
// mistake, this just below was active and causing duplicates and havoc. 
    // StoreConstructor.prototype.caller = function(){
    //   // this.hourFigurer(this.hoursOpenInt, this.startingHour);
    //   this.figureCookiesPerHourAndTotal();
    //   // this.totalCookiesAtHour();
    //   //this.renderer() was for the uls and lis
    //   // this.renderer();
    //   }; 
      
      
    //   allStores.forEach(function(store){
    //    allStores[0].hourFigurer();
    //     store.caller();
    //     });

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



    //ok think this through in terms of scrambledAnimals, in fast and slow,
    //at a glance it looks like slow grabs each store, and fast grabs all cookies per hour. so give it a try that way. 

    // slow first

    // ah! That's right, this won't work at this geography because the new stores haven't been built yet, they're built at line 148, so either think about placing the news up the page, or lower the constructor after the news, right? 
    // ok, i'm going to ACP right now, because this seems very breakable (i mean it's already broke, so? If if it ain't fixed, unbreak it!)

    //committed on masterBroke so safe to tinker, try both ways. 
    //proto furst. // i'll comment it out, copy and past it and place it right under the news. and test with a cl. 

    // ok, so I learned how to how to call the prototypes methods from dev tools... And realized that yes, the prototype isn't being called until after the news are newed down around line 150.
    // so the 2nd option was to place the news up the geograpghy of the page so that my prototypes are being called properly... Where to place it? 

    //ok, i put the news (instantiations?) right below the StoreConstructor and the console log from way down the page still worked, so clearly prototypes are highly accessible. 

    // so really there's no reason to not just immediately instantiate the stores right below the store constructor, huh?


// made this into a prototype but realized it may be better suited as just a general function. and yes i think it's better as a function for now but maybe want to think how it would be as a prototype?

//using this as a guide to iterate through different stores at same hour
// pike1.cookiesPerHourArrAndTotal[0]
// seaTac.cookiesPerHourArrAndTotal[0]
// seaCenter.cookiesPerHourArrAndTotal[0]
// capHill.cookiesPerHourArrAndTotal[0]
// alki.cookiesPerHourArrAndTotal[0]




// ok cool, so this was way confusing before but now makes much more sense.

var stepOneNext = `calculate the total hours at each hour and append it to the footer, i think this is where i should consider a prototype or possibly another constructor? like a footer constructor? no, a second constructor wouldn't be necessary, i could just add another input to the current constructor and push it there. but no, because those are stores and they already have their total hours figured...


hmm, i'm thinking of parallel which is the slow loop was hard coded for allStores[0].hoursOpenInt for the sake of simplicity...`;

var stepTwoNext = `and get the total of the hourly totals.`;


var stepThreeNext = `write some logic so that the footer always appears at the bottom. something like on submit, erase table data and start scratch. `


//yes try it gets the total values at each hour. 
var tryIt = [];
//okay good but tryIt should be an object with so it can have both the hour totals and what hour they belong to, right? no because it matches the length allStores[0].hoursOpenInt.



// i was confused at first because when i console logging i was getting far more console logs in devtools than expected, like 25, instead of 5, but then i realized in my caller function i was calling totalCookiesAtHour in a for loop for allStores.length, which explains the multiple of 5. 

  // the question is in the console.log this is more pseudo code since it doesn't work as real code, but how to think about making something like this work, where in the inner for loop store iterates through allStores while hour holds steady until all stores have looped and the outer for loop ++s by 1, then the cycle repeats. 


// StoreConstructor.prototype.caller was originally here
StoreConstructor.prototype.caller = function(){
this.hourFigurer(this.hoursOpenInt, this.startingHour);
this.figureCookiesPerHourAndTotal();
// this.totalCookiesAtHour();
//this.renderer() was for the uls and lis
// this.renderer();
};


allStores.forEach(function(store){
  store.caller();
  });




var totalCookiesAtHour = function() {
  let counter = 0;  
  for (let slow = 0; slow < allStores[0].hoursOpenInt; slow ++){
    if (counter){
  //only will enter if counter is truthy, it begins falsy
  tryIt.push(counter);
  counter = 0;
    }
    for(let fast = 0; fast < allStores.length; fast ++){
      //oh be careful, I was getting a bunch of undefineds this morning and last night it was working, but that's because last night i was calling this function from dev tools so the full program had time to run through, this a.m i wrote the call right below the declaration, but the caller prototype was further down the page so the values were undefined until it hit that caller line. put the caller up below the other prototypes and now it works. 
        counter += allStores[fast].cookiesPerHourArrAndTotal[slow];
        
      }
    }
  };
  
  totalCookiesAtHour();
  
  var totalTotal = function(){
  let plusser = 0;
    for(let counter = 0; counter < tryIt.length; counter ++){
      plusser += tryIt[counter];
    }
  };
  
  totalTotal();
  
  

// //they all fire, 

//   //what's the best way to call these functions? 
  // StoreConstructor.figureCookiesPerHourAndTotal();
//   //this is the only place it's called. 
//   StoreConstructor.hourFigurer(StoreConstructor.hoursOpenInt, StoreConstructor.startingHour);

  // storeRenderer();

  //min,max,avgCookieSale,hoursOpenInt,startingHour
//in code review we learned that the named variables for constructing new stores is unneccesary. 
// the new StoreConstructor will be good enough. 

//ok, so cl-ing here is undefined, but cl-ing right below all these new store constructors they show up, because allStores.push is in the constructor and that's why they don't appear until they're built with new.

// pike1,seaTac,seaCenter,capHill,alki



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





var tableHeader = function(store){

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

var tableGrab = document.getElementById('myTable');
var totalEl = document.createElement('th');
var totalContent = document.createTextNode('total');
rowHeader.appendChild(totalContent);
rowHeader.id = 'rowHeader';
tableGrab.appendChild(rowHeader);

}

//hard coding a single store for now


var tableHeaderRender = function(){
tableHeader(allStores[0]);  
}
tableHeaderRender();


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

var tableRower = function(store){
  

var rowing = document.createElement('TR');
  rowing.setAttribute('id', 'storeRow');
  
  document.getElementById('myTable').appendChild(rowing);

// let storeContents = Object.values(store);
let storeContents = store.cookiesPerHourArrAndTotal;

let cells = [];
let contents = [];

//therethere

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
  // tableRower(allStores[i]);
  // }
  }

  for (var i = 0; i < allStores.length; i ++){
    // console.log(allstores[store]);
  tableRower(allStores[i]);
  }

//herehere

  var tableFooter = function(){

  let displayBoard = document.getElementById('myTable');
  // displayBoard.textContent = '';
  
  // //this erases the table storeRows and leaves the header. 
  // for(var i = 0; i < tableGrabUniversal.children.length; i ++){
  //   // console.log(tableGrabUniversal.children[i]);
  //   // console.log(tableGrabUniversal.children[i].id);
  //   if(tableGrabUniversal.children[i].id === 'storeRow'){
  //   console.log('instance');  
  //   tableGrabUniversal.children[i].textContent ='';
  //   }
  // }
  // for (var i = 0; i < allStores.length; i ++){
  //   // console.log(allstores[store]);
  // tableRower(allStores[i]);
  // }

  


  // for (var i = 0; i < allStores.length; i ++){
  // tableRower(allStores[i]);
  // }
  let footerCreation = document.createElement('TR');
  let footerNameCreation = document.createElement('TD');
  footerNameCreation.textContent = ('total');
  footerCreation.appendChild(footerNameCreation);
  
  // footerCreation.appendChild('totals');

  footerCreation.id = 'footer';
  displayBoard.appendChild(footerCreation);
  
  let footerFillerFun = function(){
  let footerFillerArr = [];  
  //tryIt
  for(let i = 0; i < tryIt.length; i ++){
    footerFillerArr[i] = document.createElement('TD'); 
    footerFillerArr[i].textContent = tryIt[i];
    footerCreation.appendChild(footerFillerArr[i]);
    
  }  
};
  footerFillerFun();
};
tableFooter();

console.log(allStores.length);



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

newStore.caller();
tableRower(newStore);
console.log(allStores.length);

 //this erases the table storeRows and leaves the header. 
  for(var i = 0; i < tableGrabUniversal.children.length; i ++){
    // console.log(tableGrabUniversal.children[i]);
    // console.log(tableGrabUniversal.children[i].id);
    if(tableGrabUniversal.children[i].id === 'storeRow'){
    console.log('instance');  
    tableGrabUniversal.children[i].textContent ='';
    }
    else if(tableGrabUniversal.children[i].id === 'footer'){
          console.log('found the footer');
          tableGrabUniversal.children[i].textContent = '';  
        }
      }
  
  for (var i = 0; i < allStores.length; i ++){
    // console.log(allstores[store]);
  tableRower(allStores[i]);
  }

  tableFooter();
// allStores.push(new Store);
};

newStoreForm.addEventListener('submit', handleNewStore);




// for (var i = 0; i < tableGrabUniversal.children.length; i ++){
//     if(tableGrabUniversal.children[i].id === 'footer'){
//     console.log('found the footer');
//     tableGrabUniversal.children[i].textContent = '';
    
//     }
//   }
  

// var row = tabling.insertRow(0);
// var cell = row.insertCell(0);
// cell.innerHTML = 'new cell';
