'use strict';

/**
 * Executes the submitted and the solution, to compare the stdout.
 * The module to be require as the first param.
 */

// the filename that the user created their solution in. 
// eg. `program.js` if the user tried to verify with `seneca-in-practice verify program.js`
var file = process.argv[2]; 
var usersModule = require(file);

var seneca = require('seneca')();

// tell seneca to use the user created module, and call the function we told them to create.
seneca
  .use(usersModule)
  .act({role: 'greeting', cmd: 'hello', name: 'world'}, function(err, reply){
  	console.log('called pattern {role: \'greeting\', cmd:\'hello\'} with msg object {name: \'world\'}');
  	console.log('Error:', err);
  	console.log('Reply:', reply);
  	console.log('Expected reply.res to be \'Hello world!\'');
  })
  .act({role: 'greeting', cmd: 'hello', name: 'batman'}, function(err, reply){
  	console.log('called pattern {role: \'greeting\', cmd:\'hello\'} with msg object {name: \'batman\'}');
  	console.log('Error:', err);
  	console.log('Reply:', reply);
  	console.log('Expected reply.res to be \'Hello batman!\'');
  })
  .act({role: 'greeting', cmd: 'hello', name: 'superman'}, function(err, reply){
  	console.log('called pattern {role: \'greeting\', cmd:\'hello\'} with msg object {name: \'superman\'}');
  	console.log('Error:', err);
  	console.log('Reply:', reply);
  	console.log('Expected reply.res to be \'Hello superman!\'');
  })
