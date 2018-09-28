let rando = Math.random();

var x = 11;

var arr = [];
var hourInteger = 12;
arr.length = hourInteger;


var pike1 = {
    
    min: 23,
    max: 65,
    avgCookieSale: 6.3,
    hoursOpenInt: 48,
    startingHour: 8,
    cookiesPerHourArr: [],
    stringHoursArr: [], 

    randomCustomersPerHour: function(){
    let randoCust = Math.random();
    let multed = Math.floor(randoCust * (this.max - this.min) + this.min);
    return multed;
    },

    //two versions?
    figureCookiesPerHour : function(){
        // for (var i = 0; i < this.hoursOpenInt)
        for (var i = 0; i < this.hoursOpenInt; i ++){
        var customersPH = (Math.floor(this.randomCustomersPerHour() * this.avgCookieSale));  
        this.cookiesPerHourArr.push(customersPH);
    }
  },

    totalCookie: function(){
      let cookiePlusser = 0;  
      for (cookie in this.cookiesPerHourArr){
        cookiePlusser += this.cookiesPerHourArr[cookie];
        }  
        return cookiePlusser;
      },  


      hourFigurer: function(hoursOpenInt,startingHour){ 
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

// console.log(pike1.cookiesPerHourArr, 'cookies per hour before');
pike1.figureCookiesPerHour();
// console.log(pike1.cookiesPerHourArr, 'cookies per hour after');
pike1.hourFigurer(pike1.hoursOpenInt, pike1.startingHour);


//this renderer works
// var grabber = document.getElementById('grabMe');
// let elCreations = [];
// for(var i = 0; i < pike1.cookiesPerHourArr.length; i ++){
//  elCreations[i] = document.createElement('li');
//  grabber.appendChild(elCreations[i]);
// elCreations[i].id = i;
// elCreations[i].textContent = i;
// }

// ---------modify this renderer to render stringy from pike1.hourfigurer

var grabber = document.getElementById('grabMe');
let elCreations = [];
for(var i = 0; i < pike1.hoursOpenInt + 1; i ++){
 elCreations[i] = document.createElement('li');
 // elCreations[i].id = i;
 elCreations[i].textContent = `remarkably, at ${pike1.stringHoursArr[i]} we sold ${pike1.cookiesPerHourArr[i]} cookies`;
 var last = elCreations[elCreations.length -1];
 console.log(elCreations[i]);
// last.textContent = pike1.totalCookie();
grabber.appendChild(elCreations[i]);
}


//  var lastForTotal = document.createElement('li');
//  lastForTotal.textContent = pike1.totalCookie();
//  elCreations.push(lastForTotal); 
//  grabber.appendChild(elCreations[i]);





// elCreations[elCreations.length].textContent = pike1.totalCookie();



// pike1.hourCounter = function(){
//     let appender = 0;
//     for(hour in this.hours){
//       appender ++;    
//     }     
//     console.log(appender);
//     this.integerHours = appender;
//     //long winded way of seeing how many hours are in hours.
//     };

