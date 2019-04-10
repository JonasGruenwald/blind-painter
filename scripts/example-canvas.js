/**
 * Example Canvas drawing
 * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
 */

 // Setup
const canvas = document.createElement("canvas");
canvas.width = 300;
canvas.height = 300;
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas)

// Drawing
ctx.lineWidth = 10;
ctx.strokeRect(75, 140, 150, 110);
ctx.fillRect(130, 190, 40, 60);
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();

console.log("[Example] Canvas")
