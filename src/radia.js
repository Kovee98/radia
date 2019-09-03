'use strict';

var Radia = function(selector, opts) {
    var radioGroup = document.querySelector(selector);
    this.selector = selector;
    this.name = this.selector.replace('#', '');
    this.title = opts.title;
    this.choices = opts.choices;

    this.radiaDiv = document.createElement('div');
    this.radiaDiv.id = this.name + '-radia';

    this.choices.forEach((choice) => {
        var choiceBtn = document.createElement('button');
        // choiceBtn.id = choice.label;
        choiceBtn.innerHTML = choice.label;
        this.radiaDiv.appendChild(choiceBtn);
    });

    radioGroup.parentNode.insertBefore(this.radiaDiv, radioGroup.nextSibling);
}

module.exports = Radia;
