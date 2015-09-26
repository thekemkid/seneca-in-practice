module.exports = function math(options) {
    this.add('role:math,cmd:sum', function( msg, respond ) {
        respond(null, {sum: msg.leftHandSide + msg.rightHandSide});
    });
};
