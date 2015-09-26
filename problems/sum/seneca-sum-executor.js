'use strict';

/**
* Executes the submitted and the solution, to compare the stdout.
* The module to be require as the first param.
*/

var module = require(process.argv[2]);
var seneca = require('seneca')();

seneca.use(module)
  .act('role:math,cmd:sum,leftHandSide:1,rightHandSide:2', function(err, reply){
  	console.log('called role:math,cmd:sum with args leftHandSide:1,rightHandSide:2');
  	console.log('Error:', err);
  	console.log('Reply:', reply);
  	console.log('Expected reply.sum to be 3');
  })
  .act('role:math,cmd:sum,leftHandSide:100,rightHandSide:200', function(err, reply){
  	console.log('called role:math,cmd:sum with args leftHandSide:100,rightHandSide:200');
  	console.log('Error:', err);
  	console.log('Reply:', reply);
  	console.log('Expected reply.sum to be 300');
  })
  .act('role:math,cmd:sum,leftHandSide:27,rightHandSide:73', function(err, reply){
  	console.log('called role:math,cmd:sum with args leftHandSide:27,rightHandSide:73');
  	console.log('Error:', err);
  	console.log('Reply:', reply);
  	console.log('Expected reply.sum to be 100');
  })
