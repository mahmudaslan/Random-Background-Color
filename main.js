// let colors = [
//   "#f44336",
//   "#e91e63",
//   "#9c27b0",
//   "#673ab7",
//   "#ffc107",
//   "#3f51b5",
//   "#2196f3",
//   "#03a9f4",
//   "#00bcd4",
// ];
// document.body.style.backgroundColor =
//   colors[Math.floor(Math.random() * colors.length)];
// document.body.append(colors[Math.floor(Math.random() * colors.length)]);

let colorArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let colorParts = [];
for (let i = 0; i < 6; i++) {
  colorParts.push(colorArray[Math.floor(Math.random() * colorArray.length)]);
}
let finalColor = `#${colorParts.join("")}`;
document.body.append(finalColor);
document.body.style.backgroundColor = finalColor;
