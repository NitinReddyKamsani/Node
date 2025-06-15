
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

Q) How do u get access to module.export
A) the (module) is passed as a parameter to IIFE 

Day-4 : 
-> Synchronous and Asynchronous nature
-> JavaScript is Synchronous in nature but node.js is Asynchronous in nature.
-> In Synchronous nature the process wait until the previous process has completed its execution.
-> In Asynchronous nature the process doest wait for another process and the process which takes the least time gets executed first.
-> Node.js cant access the files,websites,timer and databases etc all these things are taken care by the OS. 
-> In order to use these OS resources Node.js need a super power and that super power is Libuv.

Day-5 :
-> fs.readFile("path","utf-8",(err,data)=>{console.log(data)}) //this is Asynchronous
-> fs.readFileSync("path","utf-8") //this is Synchronous
-> if you use a method with Sync() then it will block the main thread and the V8 engine wait till line gets executed before going to the next line.

Day-6 : 
-> Whenever you type the code,  the code is given for parsing.
-> In parsing the lexical analysis and tokenization takes place .
-> Tokenization is the process of breaking the code into small pieces called tokens.
-> After lexical analysis and tokenization an abstract syntax tree is created.

Day-7 :
-> The abstarct syntax tree is then given to the ignition interpreter and then it is coverted to byte code.
-> The lines or the commands that are most repeated are given to the turbo fan compiler and this process is called as optimization.
-> The turbofan compiler gives the code to the optimized machine code and the code is executed.
-> The turbofan make some assumptions like data types etc, if the assumptions made by the turbofan are wrong then the code is again given to the ignition interpreter and this is called as de-optimization.
-> The ignition interpreter again generates the byte code and the execution is done.