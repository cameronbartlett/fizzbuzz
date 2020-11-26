// Include required libraries
const path = require('path');
const { Liquid } = require('liquidjs');

// Set up liquid templating engine
var engine = new Liquid({
    root: path.resolve(__dirname, 'views/'),
    extname: '.liquid' 
});

// Set 'arg' if a value has been passed in
const arg = process.argv[2];

// Render FizzBuzz to the command line
engine
    .renderFile("fizzbuzz", {num: (arg && (arg === parseInt(arg, 10)))?arg:100})
    .then(console.log)