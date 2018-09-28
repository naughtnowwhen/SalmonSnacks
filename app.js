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
    totalCookie: function(){
      let cookiePlusser = 0;  
      for (cookie in this.cookiesPerHourArr){
        cookiePlusser += this.cookiesPerHourArr[cookie];
        }  
        return cookiePlusser;
      },  

    figureCookiesPerHourAndTotal : function(){
        // for (var i = 0; i < this.hoursOpenInt)
        for (var i = 0; i < this.hoursOpenInt; i ++){
        var customersPH = (Math.floor(this.randomCustomersPerHour() * this.avgCookieSale));  
        this.cookiesPerHourArr.push(customersPH);
      }
    this.cookiesPerHourArr.push(this.totalCookie());  
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
pike1.figureCookiesPerHourAndTotal();
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


//ok, having trouble with this currently, how about trying a slightly different angle, instead of two step process here: elCreations[i] and last = elCreations[clCreations.lenght - 1], I do that last bit adding inside of either a 2nd, but related function, or just all in one function like figureCookiesPerHourAndTotal? The part that isn't working is the declaration of var last, for now i'll comment that whole chunk out. 

//wrapped it in a function called rendererer...
//what about an if statement or something that allows all [i]s to append to the screen with the string literals at elCreations[i].textContent to render to the screen, but then for the last index it has a different string version to reflect the fact that it's the total?
// var renderer = function(){
  var grabber = document.getElementById('grabMe');
  let elCreations = [];
  for(var i = 0; i < pike1.hoursOpenInt + 1 ; i ++){
  elCreations[i] = document.createElement('li');
  // elCreations[i].id = i;

      elCreations[i].textContent = `remarkably, at ${pike1.stringHoursArr[i]} we sold ${pike1.cookiesPerHourArr[i]} cookies`;


  //  console.log(elCreations[i]);
  grabber.appendChild(elCreations[i]);
  }
// }; 


//This was previously in the for loop, but Jackie noticed it shouldn't be there. Moved it out and it worked. Thanks Jackie. 
// var last = elCreations[elCreations.length -1];
// last.textContent = pike1.totalCookie();
// grabber.appendChild(last);


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

