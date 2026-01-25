/*
So How Js Work Internally?
 ** I can see this using JS Loupe in chrome

 1. We know js work line by line that call synchronous. so js default work synchronously
 2. Next-> what we declare Variable or Function those store in a Global Scope.{Global scope has 2part, Function + var store in Window scope, const + let store in script scope. }
 3. Next--> All Function store in Call Stack after one by one and latest one call first. 
 4. Next--> If we use our code any Asynchronous code, like SetTimeout or Web Api this are Asynchronous code, This is not go call stack first.
 -- They go first Web Api then store in Call Back Qeue, When our Call Stack empty all function work done then There is a Event loop between call stack and call back quee. then call back stored function will go one by one.


*/ 