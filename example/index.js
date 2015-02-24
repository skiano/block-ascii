
var asciiBlock = require('../index'),
  rand = require('random-seed').create();

var block = asciiBlock([
    rand.intBetween(15,51),
    rand.intBetween(15,51)
  ], {
    rotate: 'half',
    step: rand.intBetween(0,25),
    direction: ['x','y'][rand.intBetween(0,1)]
});

function addPoints (a, b) {
  return [a[0] + b[0], a[1] + b[1]];
}

function xMark (point, block) {
  block.mark(point, 'X');
  block.mark(addPoints(point,[1,1] ), 'X');
  block.mark(addPoints(point,[1,-1] ), 'X');
  block.mark(addPoints(point,[1,1] ), 'X');
}

for (i = 0; i < rand.intBetween(1, 15); i += 1) {
  var p = [rand.intBetween(0,block.width), rand.intBetween(0,block.height)];
  xMark(p, block);
}

var str = block.render(140,30, 0, 0);
console.log('\n' + str + '\n');
