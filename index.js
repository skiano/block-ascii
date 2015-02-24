
var block = require('skiano.block'),
  VOID = ' ',
  DEFAULT_GLYPH = 'X';

function AsciiBlock (dimensions, options) {

  var b = block(dimensions, options),
    marks = {};

  this.width = dimensions[0];
  this.height = dimensions[1];

  this.mark = function (point, glyph) {
    glyph = glyph || DEFAULT_GLYPH;
    marks[b.get(point).join('.')] = glyph;
  };
  
  this.render = function (w, h, offsetX, offsetY) {
    
    w = w || dimensions[0];
    h = h || dimensions[1];
    offsetX = offsetX || 0;
    offsetY = offsetY || 0;

    var rowMarks = [],
      columnMarks,
      y,
      x;

    for (y = 0; y < h; y += 1) {
      columnMarks = [];
      for (x = 0; x < w; x += 1) {
        var c = b.get(x + offsetX, y + offsetY).join('.');
        columnMarks.push(marks[c] || VOID);
      }
      rowMarks.push(columnMarks.join(''));
    }

    return rowMarks.join('\n');

  };

}

module.exports = function (dimensions, options) {
  return new AsciiBlock(dimensions, options);
};

