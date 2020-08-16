// Works
function a() {
    console.log(this); // window
   }
   a();
   
   
   // Doesn't work
   /*
   function b() {
       'use strict';
       console.log(this); // undefined
   }
   b();
   */
   
   // Why this?
   // 1. Gives method access to their obj
   // 2. execute same code for multiple objects
   
   function importantPerson() {
       console.log('Name is: ' , this.name);
   }
   var name = 'Naveen';
   
   var obj1 = {
       name: 'Raki',
       importantPerson: importantPerson
   }
   
   var obj2 = {
       name: 'PS',
       importantPerson: importantPerson
   }
   
   console.log(importantPerson()); // Naveen
   console.log(obj1.importantPerson()); // Raki