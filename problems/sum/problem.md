So, now you should have created your first microservice with Seneca! Yay!

This service was defined with the pattern `{role: 'greeting', cmd: 'hello'}` and the
service `function` took a `msg` object with a `name` property and a `respond`
callback, and called the callback with a null `error` and an object with the 
property `res` set to 'hello `msg.name`!' 

A shorthand version of the pattern you wrote which Seneca would recognize is `'role:greeting,cmd:hello'`.
For future examples we will use this shorthand form of pattern definition.

For this exercise you need to define a `math` module with a `sum` command!
This `add` command should expect to have two properties in the incoming `msg` object, 
the `leftHandSide` of the sum, and the `rightHandSide` of the sum, such that 
`leftHandSide + rightHandSide` would be equal to the answer. You need to
call the `respond` callback with a `reply` object with a `sum` property, 
which is the answer to the sum!

Building on your previous solution, you will need to export a Microservice in which
you want to add a `sum` command to the `math` role!

Hint:
Remember you can write a shorthand version of the pattern like `'role:abc,cmd:xyz'` and
the `respond` callback takes an `error` and `reply` object.


When you have completed your program, you can run it in the test
environment with:

  {bold}{appname} run program.js{/bold}

And once you are happy that it is correct then run:

  {bold}{appname} verify program.js{/bold}

And your submission will be verified for correctness. After you have
a correct solution, run `{bold}{appname}{/bold}` again and select the next problem!
