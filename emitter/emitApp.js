var Emitter = require('./emitter');
var emtr = new Emitter();

emtr.on('greet', function() {
    console.log('somewhere, someone said something');
  });

emtr.on('greet', function() {
    console.log('somewhere, someone said something else.. spooky');
  });

console.log('hello');
emtr.emit('greetrr');
