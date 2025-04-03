let statement = require("./statement");  
let plays = require("./plays.json");     
let invoice = require("./invoice.json"); 

let stmt = statement(invoice, plays);
console.log(stmt); 