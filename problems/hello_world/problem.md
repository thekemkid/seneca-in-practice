Seneca is a framework which lets you build a Microservice system without having
to worry about how those services will fit together in production.

Every Microservice consumes messages, which are simply JSON objects, with any
internal structure that you want to use.
The producers of these messages do not know which service is interested in
receiving the messages. Indeed, the services you write (better known as service
writers!) specify the property {bold}patterns{/bold} that they care about, and Seneca (with 
a little configuration help) makes sure that they get any messages matching those
patterns, sent by other services (the message producers!).
The patterns are as simple as you make them, they are just a list of key-value
pairs that the properties of the JSON message document must match. Every Microservice
must have a {red}{bold}role{/bold}{/red} and a {red}{bold}cmd{/bold}{/red} which calls it!

To define our service, we must first tell Seneca about it! To do this, we 
have to {red}{bold}add{/red}{/bold} it to Seneca. To add our Microservices to Seneca, we have to tell
the Seneca instance the pattern which it should match, and the function that we
want to run when our Seneca instance gets a message that matches our message
pattern. So, to define our pattern/function method, we must use the
{red}{bold}.add(pattern, function){/bold}{/red} method on our Seneca instance. For the purpose of this
exercise, "this" will be bound to our Seneca instance. We will learn in future
exercises how this bounding is done.

Let's see an example "hello" service, defined in a "introduction" module or role.
This is a little service that replies with an object with a property `res` which is "Hello World!" when it gets called!

```javascript
module.exports = function introduction(options) {
    
    // lets define our pattern.
    var ourPattern = { role: 'introduction', cmd: 'hello' };
    
    // and our function.
    var ourFunction = function(msg, respond) { 
         // "msg" is the JSON object that the producer called the service with.
         // "respond" is the callback that the message producer defines when it calls the service.
         // the first argument of this callback is an error object. (following the error back nodejs pattern)
         // the second argument of this callback is the object to reply with.

         var error = null;
         var replyObj = {res: "Hello World"};

         respond(error, replyObj);
    };

    // Here we add our pattern and the related function to our seneca instance!
    this.add(ourPattern, ourFunction);
};
```

The goal of this exercise is to build a simple service for the {bold}greeting{/bold} module/role, with a {bold}hello{/bold} command.
This service must take a `name` in the msg object of the service function, 
and reply with an object with a res variable with the value "Hello `msg.name`!".

For the purpose of this exercise, you need to export your module directly, like the example above.

``` javascript
module.exports = function greeting(options) {
    
    var yourPattern = {role: 'greeting', cmd: ...};
    var yourFunction = function(...){
        // We can't give it all away!
    };

    this.add(...);
};
```

Hint: 
If this service was called with {role: 'greeting', cmd: 'hello', name: 'seneca'}
your module should respond with a null error and and a replyObj = {res: 'Hello seneca!'}

When you have completed your program, you can run it in the test environment with:

  {bold}{appname} run program.js{/bold}

And once you are happy that it is correct then run:

  {bold}{appname} verify program.js{/bold}

And your submission will be verified for correctness. After you have
a correct solution, run `{bold}{appname}{/bold}` again and select the next problem!
