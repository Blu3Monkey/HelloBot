let builder = require('botbuilder');

// Create console connector and listen to the command prompt/terminal/console for messages 
let connector = new builder.ConsoleConnector().listen();

let bot = new builder.UniversalBot(connector, (session)=>{
	let name = session.message.user.name
	let message = session.message.text
	session.send(name + " said "  + message)
})