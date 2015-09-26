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
  .act({role: 'greeting', cmd: 'hello', name: 'world'}, console.log)
  .act({role: 'greeting', cmd: 'hello', name: 'batman'}, console.log)
  .act({role: 'greeting', cmd: 'hello', name: 'superman'}, console.log)
