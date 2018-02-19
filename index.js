'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.b78cea09-86ec-457e-8101-35cfce7f2911"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Keyboard Facts';

/**
 * Array containing ice cream facts.
 */
var FACTS = [
	"Japanese keyboards have th shortest space keys",
	"When you hit space bar, 600,000 people in the world did just the same",
	"QWERTY is not the most efficient keyboard layout",
	"Your keyboard may contain more germs than a toilet seat",
	"The Scroll Lock key is supposed to lock page scrolling with arrow keys",
	"The IBM model M keyboard is the father of modern day keyboards",
	"The DVORAK keyboard is supposed to incorporate less finger movement for faster typing speeds and reduced repetitive strain injuries",
	"Keyboard computers were computers that fit inside bulky keyboards such as the Commodore 64 and AMiga 500",
	"The word typewriter can be typed using only top row on QWERTY keyboards",
	"CTRL ALT DEL is a famous keyboard shortcut to soft reboot",
	"The longest words to type with one hand is stewardesses for left hand and polyphony for the right hand using the QWERTY layout",
	"The only keyboard monument i the world is for QWERTY and is located in the city of Yekaterinburg, Russa.",
	"The most efficient keyboard lyout in the world is called Turkish F.",
	"Every 10,000 words type is one mile travelled by the fingers",

];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random ice cream fact from the ice cream facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a keyboard fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
