function setup() {
  // noLoop is required, otherwise execution will never stop
  console.log('[Example] P5.js setup');
  noLoop();
}

function draw() {
  console.log('[Example] P5.js draw');
  ellipse(50, 50, 80, 80);

  // This helper event lets node know when drawing is done, it triggers the callback passed into run()
  document.dispatchEvent(new Event('painting-done'))
}
