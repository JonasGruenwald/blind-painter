const fs = require("fs");
const {JSDOM} = require("jsdom");

/**
 * Run a list of scripts in order inside of a jsdom window context and return the context.
 * Data can be passed into the scripts through the data parameter, it will be available as window.painterData in scripts
 * @param {array} scripts - scripts to run
 * @param {object} data - data that will be passed into the window context
 * @param {function} callback - will be called when painting-done is fired on the script
 * @returns {object} window that the scripts have been executed on
 */
exports.run = (scripts, data = null, callback = null) => {
  const dom = new JSDOM(`
    <!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
      </body>
    </html>
`, {runScripts: "dangerously"});
  const {window} = dom;
  window.painterData = data;
  scripts.forEach(script => {
    const scriptText = fs.readFileSync(script, {encoding: "utf-8"});
    const scriptEl = window.document.createElement("script");
    scriptEl.textContent = scriptText;
    window.document.body.appendChild(scriptEl);
  });
  if (callback) {
    window.document.addEventListener('painting-done', function (e) {
      callback(window, e)
    })
  }
  return window;
};

/**
 * Given a JSDOM window, get a canvas from it and save the image to the specified path
 * @param {object} win - JSDOM window object
 * @param {string} path - where to save the image
 * @param {string} type - file type for the image
 * @param {number} quality - output image quality
 */
exports.saveCanvas = (win, path, type = 'image/png', quality = 1) => {
  const canvas = win.document.querySelector('canvas');
  const buffer = canvas.toDataURL(type, quality).split('base64,')[1];
  fs.writeFile(path, buffer, 'base64', function (err) {
    if (err) {
      console.log('Error while writing to output file');
      console.error(err)
    }
  });
};
