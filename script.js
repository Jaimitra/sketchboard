// getContext() tells on what dimension we are working and return us the diagram
// pointerdown: it tells that the user is pressing the key on the trackpad and it event occur when the button is pressd
// pointerup:it tells that the user is released the key on trackpad and it event occurs when the button is released
// --->here we use both the pinterup and pointerdown because when we need draw we need guide,i.e if we just use the mousemove
//  //--->event directly than when we move the cursor the line will be drawed even though we dont need it so that why
//  //--->we use trackpad button.we will only draw when the trackpad button is pressed and drawing is stopped when
//  //--->we release the tarckpad.
// beginPath():it tells that new path is begining here
// lineTo():it adds a line from the last point in the path to a new point.
// moveTo():it tells go to particular place(coordination)
// strole():it will draw the line
// strokeStyle/fillStyle : used for giving color to the lines
// fillRect(x,y,width,height):used for a drawing a rectangle x,y strating points with width and height
// clearRect(x,y,width,height):used for removing the rectangles we drawed
// mousemove:this event occurs when the mouse strat moving

let canvas = document.querySelector(".canvas");
let context = canvas.getContext("2d");
let position = document.querySelector(".position");
let flag = 0;
canvas.addEventListener("pointerdown", (event) => {
  flag = 1;
  context.moveTo(event.x, event.y);
});
canvas.addEventListener("mousemove", (event) => {
  if (flag) {
    context.lineTo(event.x, event.y);
    context.stroke();
  }
  position.innerText = `${event.x}px ${event.y}px`;
});
canvas.addEventListener("pointerup", (event) => {
  flag = 0;
});
// pen operation
// pen color
let pencolor = document.querySelector(".pencolor");
pencolor.addEventListener("input", (event) => {
  let color = pencolor.value;
  context.strokeStyle = `${color}`;
  context.beginPath();
});
// background
let erasecolor = "white";
// let background = document.querySelector(".backgroundcolor");
// background.addEventListener("input", (event) => {
//   let color = background.value;
//   console.log(color);
//   erasecolor = color;
//   context.fillStyle = color;
//   context.fillRect(0, 0, canvas.width, canvas.height);
//   context.beginPath();
// });
// pen size
context.lineWidth = 6;
let size = document.querySelector(".size");
let pensize = document.querySelector(".pensize");
pensize.addEventListener("input", (event) => {
  context.lineWidth = pensize.value;
  size.innerText = pensize.value;
  context.beginPath();
});
//canvas operation
// clear button
let clearbutton = document.querySelector(".clear");
clearbutton.addEventListener("click", (event) => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
});
//erase button
let erase = document.querySelector(".erase");
erase.addEventListener("click", (event) => {
  context.strokeStyle = erasecolor;
  context.beginPath();
});
// pen button
let pen = document.querySelector(".pen");
pen.addEventListener("click", (event) => {
  context.strokeStyle = "black";
  context.beginPath();
});
