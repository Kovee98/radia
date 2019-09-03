'use strict';

var Radia = function (selector, opts) {
    this.selector = selector;
    this.title = opts.title;
    this.choices = opts.choices;
    this.hey = function() {
        console.log("hey");
    }

    console.log("Finished initialization");
}

Radia.prototype.hello = (name) => {
    console.log("Hello " + name);
}

module.exports = Radia;
