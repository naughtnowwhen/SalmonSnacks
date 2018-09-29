'use strict';

var pike1 = {
  min: 23,
  max: 65,   
  avgCookieSale: 6.3,
  hoursOpenInt: 14,
  startingHour: 6,
  cookiesPerHourArrAndTotal: [],
  stringHoursArr: [], 

  randomCustomersPerHour: function(){
    console.log('does randomCustomersPerHour fire?', 'yes it does');
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

var pike1renderer = function(){
  let elCreations = [];
  var grabber = document.getElementById('grabMe');
  for(var i = 0; i < pike1.cookiesPerHourArrAndTotal.length ; i ++){
    elCreations[i] = document.createElement('li');
    elCreations[i].id = i;
    let total = pike1.cookiesPerHourArrAndTotal[pike1.cookiesPerHourArrAndTotal.length -1];

    if(pike1.cookiesPerHourArrAndTotal[i] !== total){
      elCreations[i].textContent = `remarkably, at ${pike1.stringHoursArr[i]} we sold ${pike1.cookiesPerHourArrAndTotal[i]} cookies`;
    }
    else if(pike1.cookiesPerHourArrAndTotal[i] === total){
      elCreations[i].textContent = `and the grand total is ${total}`;
    }
    grabber.appendChild(elCreations[i]);
  }
}; 

//they all fire, 

  //what's the best way to call these functions? 
  pike1.figureCookiesPerHourAndTotal();
  //this is the only place it's called. 
  pike1.hourFigurer(pike1.hoursOpenInt, pike1.startingHour);

  pike1renderer();


  var Seatac = {
    min: 3,
    max: 24,   
    avgCookieSale: 1.2,
    hoursOpenInt: 14,
    startingHour: 6,
    cookiesPerHourArrAndTotal: [],
    stringHoursArr: [], 
  
    randomCustomersPerHour: function(){
      console.log('does randomCustomersPerHour fire?', 'yes it does');
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
  
  var seaTacRenderer = function(){
    let elCreations = [];
    var grabber = document.getElementById('grabMe');
    for(var i = 0; i < Seatac.cookiesPerHourArrAndTotal.length ; i ++){
      elCreations[i] = document.createElement('li');
      elCreations[i].id = i;
      let total = Seatac.cookiesPerHourArrAndTotal[Seatac.cookiesPerHourArrAndTotal.length -1];
  
      if(Seatac.cookiesPerHourArrAndTotal[i] !== total){
        elCreations[i].textContent = `remarkably, at ${Seatac.stringHoursArr[i]} we sold ${Seatac.cookiesPerHourArrAndTotal[i]} cookies`;
      }
      else if(Seatac.cookiesPerHourArrAndTotal[i] === total){
        elCreations[i].textContent = `and the grand total is ${total}`;
      }
      grabber.appendChild(elCreations[i]);
    }
  }; 
  
  //they all fire, 
  
    //what's the best way to call these functions? 
    Seatac.figureCookiesPerHourAndTotal();
    //this is the only place it's called. 
    Seatac.hourFigurer(Seatac.hoursOpenInt, Seatac.startingHour);
  
    seaTacRenderer();


var seaCenter = {
  min: 3,
  max: 24,   
  avgCookieSale: 1.2,
  hoursOpenInt: 14,
  startingHour: 6,
  cookiesPerHourArrAndTotal: [],
  stringHoursArr: [], 

  randomCustomersPerHour: function(){
    console.log('does randomCustomersPerHour fire?', 'yes it does');
    console.log('is this seaCenter?');
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

var seaCenterRenderer = function(){
  let elCreations = [];
  var grabber = document.getElementById('grabMe');
  for(var i = 0; i < seaCenter.cookiesPerHourArrAndTotal.length ; i ++){
    elCreations[i] = document.createElement('li');
    elCreations[i].id = i;
    let total = seaCenter.cookiesPerHourArrAndTotal[seaCenter.cookiesPerHourArrAndTotal.length -1];

    if(seaCenter.cookiesPerHourArrAndTotal[i] !== total){
      elCreations[i].textContent = `remarkably, at ${seaCenter.stringHoursArr[i]} we sold ${seaCenter.cookiesPerHourArrAndTotal[i]} cookies`;
    }
    else if(seaCenter.cookiesPerHourArrAndTotal[i] === total){
      elCreations[i].textContent = `and the grand total is ${total}`;
    }
    grabber.appendChild(elCreations[i]);
  }
}; 

//they all fire, 

  //what's the best way to call these functions? 
  seaCenter.figureCookiesPerHourAndTotal();
  //this is the only place it's called. 
  seaCenter.hourFigurer(seaCenter.hoursOpenInt, seaCenter.startingHour);

  seaCenterRenderer();


var capHill = {
  min: 3,
  max: 24,   
  avgCookieSale: 1.2,
  hoursOpenInt: 14,
  startingHour: 6,
  cookiesPerHourArrAndTotal: [],
  stringHoursArr: [], 

  randomCustomersPerHour: function(){
    console.log('does randomCustomersPerHour fire?', 'yes it does');
    console.log('is this capHill?');
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

var capHillRenderer = function(){
  let elCreations = [];
  var grabber = document.getElementById('grabMe');
  for(var i = 0; i < capHill.cookiesPerHourArrAndTotal.length ; i ++){
    elCreations[i] = document.createElement('li');
    elCreations[i].id = i;
    let total = capHill.cookiesPerHourArrAndTotal[capHill.cookiesPerHourArrAndTotal.length -1];

    if(capHill.cookiesPerHourArrAndTotal[i] !== total){
      elCreations[i].textContent = `remarkably, at ${capHill.stringHoursArr[i]} we sold ${capHill.cookiesPerHourArrAndTotal[i]} cookies`;
    }
    else if(capHill.cookiesPerHourArrAndTotal[i] === total){
      elCreations[i].textContent = `and the grand total is ${total}`;
    }
    grabber.appendChild(elCreations[i]);
  }
}; 

//they all fire, 

  //what's the best way to call these functions? 
  capHill.figureCookiesPerHourAndTotal();
  //this is the only place it's called. 
  capHill.hourFigurer(capHill.hoursOpenInt, capHill.startingHour);

  capHillRenderer();