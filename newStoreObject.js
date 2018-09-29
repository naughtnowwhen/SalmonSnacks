'use strict';

var alki = {
  min: 3,
  max: 24,   
  avgCookieSale: 1.2,
  hoursOpenInt: 14,
  startingHour: 6,
  cookiesPerHourArrAndTotal: [],
  stringHoursArr: [], 

  randomCustomersPerHour: function(){
    console.log('does randomCustomersPerHour fire?', 'yes it does');
    console.log('is this alki?');
    let randoCust = Math.random();
    let multed = Math.floor(randoCust * (this.max - this.min) + this.min);
    return multed;
    },
//declared totalCookie first so that I can call it in figureCookiesPerHourAndTotal
  totalCookie: function(){
    console.log('does totalCookie fire?', 'yes it does');
    let cookiePlusser = 0;  
    for (var cookie in this.cookiesPerHourArrAndTotal){
      cookiePlusser += this.cookiesPerHourArrAndTotal[cookie];
      }  
      return cookiePlusser;
    },  

    figureCookiesPerHourAndTotal : function(){
      console.log('does figureCookiesPerHourAndTotal fire', 'yes it does');
      for (var i = 0; i < this.hoursOpenInt; i ++){
      var customersPH = (Math.floor(this.randomCustomersPerHour() * this.avgCookieSale));  
      this.cookiesPerHourArrAndTotal.push(customersPH);
    }
  this.cookiesPerHourArrAndTotal.push(this.totalCookie());  
    },
  
    hourFigurer: function(hoursOpenInt,startingHour){ 
    console.log('does hourFigurer fire?', 'yes it does');
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
    },
  }

var alkiRenderer = function(){
  let elCreations = [];
  var grabber = document.getElementById('grabMe');
  for(var i = 0; i < alki.cookiesPerHourArrAndTotal.length ; i ++){
    elCreations[i] = document.createElement('li');
    elCreations[i].id = i;
    let total = alki.cookiesPerHourArrAndTotal[alki.cookiesPerHourArrAndTotal.length -1];

    if(alki.cookiesPerHourArrAndTotal[i] !== total){
      elCreations[i].textContent = `remarkably, at ${alki.stringHoursArr[i]} we sold ${alki.cookiesPerHourArrAndTotal[i]} cookies`;
    }
    else if(alki.cookiesPerHourArrAndTotal[i] === total){
      elCreations[i].textContent = `and the grand total is ${total}`;
    }
    grabber.appendChild(elCreations[i]);
  }
}; 

//they all fire, 

  //what's the best way to call these functions? 
  alki.figureCookiesPerHourAndTotal();
  //this is the only place it's called. 
  alki.hourFigurer(alki.hoursOpenInt, alki.startingHour);

  alkiRenderer();