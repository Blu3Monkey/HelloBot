'use strict';

//Include the library botbuilder
let builder = require('botbuilder');

// Create console connector and listen to the command prompt/terminal/console for messages 
let connector = new builder.ConsoleConnector().listen();

// Create your bot with a function to receive messages from the user
let bot = new builder.UniversalBot(connector, function (session) {
	//Send a message back to the user via command prompt/terminal/console
    session.send("Hello World!");
});

//FIRST WAY
// Create your bot with a function to receive messages from the user
let bot = new builder.UniversalBot(connector, step);

//This function is called automatically when the user messages you
function step(session){
	session.send("Hello World!")
}

//SECOND WAY
let bot = new builder.UniversalBot(connector, function(session){
	//This code is executed because the function gets called when the user messages you
	session.send("Hello World!")
})

//THIRD WAY
let bot = new builder.UniversalBot(connector, (session)=>{
	//This code is executed because the function gets called when the user messages you
	session.send("Hello World!")
})