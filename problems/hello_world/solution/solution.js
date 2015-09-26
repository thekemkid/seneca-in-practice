module.exports = function greeting(options) {
    
    var yourPattern = {role: 'greeting', cmd: 'hello'};

    var yourFunction = function(msg, respond){
        var reply = {};
        reply.res = 'Hello ' + msg.name + '!';
        // or you could do var reply = {res: 'Hello ' + msg.name + '!'};

        respond(null, reply);
    };

    this.add(yourPattern, yourFunction);
};

