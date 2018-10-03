!!! where's my eslintr, i need that!
QQQ 
question
AAA
answer
TTT
try
PPP
problem
!!! 
important



buildEverything(); is the () that constructs the table to the screen.
clear(); erases the screen.

so where's the best place to call clear() buildEverything()? 

what about from the StoreConstructor?

TTT
i'll move my clear function from line 260 to inside the constructor function. 

 oops, moved my clear function declaration inside the constructor, not the call. Move the declaration up above the constructor and the call inside. 

PPP 
the declaration above works when the call inside the constructor is commented out, but with the call active it results in 
constructor.js:6 Uncaught TypeError: Cannot set property 'innerHTML' of null
    at clear (constructor.js:6)
    at new StoreConstructor (constructor.js:11)

TTT
 moving the clear() declaration after where 'myTable' is declared so it's not null. Will the call be able to be geographically before the declaration? 

 PPP
 nope, it can't read the call before the function. 

 QQQ
 so what about calling buildEverything() first in the constructor and then the clear()?

QQQ
so does this come down to geography? I need to put the StoreConstructor so that I can call clear() and build everything from inside the constructor? 

AAA
Jackie was saying it's overboard to wipeout the whole table, maybe just erase the footer.


QQQ
//footerfunction
var footerFunctionValues = function() {
    for (var i = 0; i < allStores.length; i ++){
    allStores[i].cookiesPerHourArrAndTotal
    for (var j = 0; j < allStores[j].cookiesPerHourArrAndTotal){
        // I was trying it something this way with nested for loops, the first for loop grabs the store i, the second grabs the index at hour j, adds that value to where, some property of the constructor that is totalStoreValues at hour i ()
        }
    }
}

AAA
looking back the problem jumps out, i shouldn't be incrementing in the outer for loop with allStores.length, it should be hoursOpenInt.

prototype totalCookiesAtHour looks to be 



---------------------first attempt----------------------


StoreConstructor.prototype.totalCookiesAtHour = function() {

  for (var i = 0; i < this.hoursOpenInt; i ++){
    console.log(this);
    console.log(i);
    // for (var j = 0; j < allStores.length; j++)
    for (var j = 0; j < allStores.length; j ++){
    console.log(allStores[j].cookiesPerHourArrAndTotal);  
    
    }
    // console.log(this.hoursOpenInt);
  }
    console.log(i);
  }


  //for now this.hoursOpenInt is overkill, especially since all the store hour lengths will be the same. so console logging this results in all the store objects, each with their own hourOpenInt, so there many multiples. Perhaps a good way to be able to handle different time schedules would be to pass the hourOpenInt as an argument to the function.


Second attempt

StoreConstructor.prototype.totalCookiesAtHour = function() {
  //was using this.hoursOpenInt, going to use a hardcoded version for now
var singleHourAdder = 0;
  for (var i = 0; i < hours; i ++){
    console.log(i, 'i');
    for (var aaa = 0; aaa < allStores.length; aaa ++)  {
    allStores[aaa].cookiesPerHourArrAndTotal
    }
  }
}

StoreConstructor.prototype.totalCookiesAtHour = function() {
// last time i tried a hard coded version of time, this time i'll try using this.time
for (var hour = 0; hour < this.hoursOpenInt; hour ++){
console.log(hour);
for (var store = 0; store < allStores.length; store ++){
// console.log(hour, 'hour', store, 'store');

//this console log is interesting, look at how many undefineds there are are how it gets more and more defined later on.
// console.log(allStores[store].cookiesPerHourArrAndTotal[hour]); 
console.log(this);
}
}
}

i'm noticing a problem, in the first loop it's not really this.hoursOpenInt that I want, it's much more these.hoursOpenInt... each store has it's own hour properties but that's not really what i want. How to go back and forth between the universal and the particular instance? 

third attempt

 StoreConstructor.prototype.totalCookiesAtHour = function() {
    for (var hour = 0; hour < this.hoursOpenInt; hour ++){
      console.log(hour);
       for (var store = 0; store < allStores.length; store ++){
    // so the outer loop will stop at each while the inner loop will cycle through all the stores, next hour, all stores, etc...
    console.log(allStores[store]); 

      }
    }
  }






