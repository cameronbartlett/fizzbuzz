const path = require('path');
const { Liquid } = require('liquidjs');

var engine = new Liquid({
    root: path.resolve(__dirname, 'views/'),
    extname: '.liquid' 
});

const arg = process.argv[2];

engine
    .renderFile("fizzbuzz", {num: (arg)?arg:100})
    .then(console.log)