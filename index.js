const {run, saveCanvas} = require('./utils.js');

/* Replace the examples below with your drawing scripts */

// Simple canvas example
saveCanvas(
  run(['./scripts/example-canvas.js']),
  'output/output-canvas.png'
);

// P5 example with callback
run([require.resolve('p5'),'./scripts/example-p5.js'],{testData: 'hallo'},function(output){
  saveCanvas(output, 'output/output-p5.png')
});

// Two.js example
saveCanvas(
  run([require.resolve('two.js'),'./scripts/example-two.js']),
  'output/output-twojs.png'
);
