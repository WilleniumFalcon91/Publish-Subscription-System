// const event = require('event');
// const myEmitter = new event.eventEmitter();

// myEmitter.on('hot-donuts-now', (howMany, timestamp) => {
//     myEmitter.emit('hot-donuts-now', 100, (new Date()).getTime());
// });

// myEmitter.on('no-donuts') => {
//     myEmitter.emit('no-donuts');
// });


const EventEmitter = require('events').EventEmitter;
const myEE = new EventEmitter();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(num) {
  return num % 2 === 0;
}

setInterval(() => {
  let event;
  if (isEven(getRandomInt(1, 100))) {
    event = 'hot-donuts-now';
  } else {
    event = 'no-donuts';
  }
  myEE.emit(event);
}, 1000);

function addHotListener(response) {
  myEE.on('hot-donuts-now', () => {
    console.log('donuts');
    response("Come get your donuts!");
  });
}

function addNoneListener(response) {
  myEE.on('no-donuts', () => {
      console.log('no donuts');
      response("We're all out of donuts...better luck next time.")
  });
}

module.exports = {
  addHotListener: addHotListener,
  addNoneListener: addNoneListener
};