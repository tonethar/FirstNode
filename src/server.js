const helper = require('./helper.js');
const Polygon = require('./Polygon.js');
const _ = require('underscore');
const http = require('http');

console.log("Hello world");

const helloFunction = () => {
	console.log("hello function!");
};

helloFunction();

helper.getMessage();

const p = new Polygon(10,10);
console.dir(p);
console.log(p.height);

const myArray = [1,2,3,4,5]
console.log(_.contains(myArray,3));


// server stuff
const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest  = (request,response) => {
  if(request.url === '/favicon.ico'){
		console.log("favicon requested");
	}else{
		//console.dir(request);
	}
	response.writeHead(200,{'Content-type':'text/plain','messge': 'class is almost done'});
	response.write(helper.getMessage());
	response.end();
	
	console.log(`Request received on port=${port}`);
};

http.createServer(onRequest).listen(port);

