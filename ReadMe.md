
This repositry is like the digital notes that i prepare while learning node.js

Day-1 : 
-> Node.js first version was released in 2009 by Ryan Dhal 
-> Node.js is an event-driven , non-blocking i/o 
-> Ryan dhal later joined with joyent to develop the Node.js 
-> now it is being handled by OpenJs to enhance proper development

Day-2 : 
-> V8 is a google javasript engine to run javascript on the web browser 
-> V8 is written in c++ 
-> V8 follows the ECMA Script 
-> ECMAScript is a standard for scripting languages like JavaScript, JScript, and ActionScript. 
-> Node.js contains the V8 JavaScript engine (also used in browsers like Chrome) and provides additional modules (often called "super-powers") that allow JavaScript to interact with the operating system, like accessing the file system and networking, enabling it to run as a standalone program. 
-> The V8 engine compiles JavaScript (a high-level language) into machine code (binary) so the computer can execute it.

Day-3 : 
-> If you want to use one module inside another module we use require() with the path name.
-> when you use require("path") thw whole module is packed into a function and is executed.
-> Those type of functions are called IIFE(immediately invoked function expression).
-> steps to write IIFE 

            (function (){
                console.log("IIFE example")
            })()
-> In the above example we created an anonymous function and enclosed it inside a expression (), and called immediately this is how IIFE works.