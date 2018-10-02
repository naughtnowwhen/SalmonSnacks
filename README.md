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






