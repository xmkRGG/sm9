let body_page = document.body;

document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() == "w") {
    body_page.style.backgroundColor = "black";
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() == "s") {
    body_page.style.backgroundColor = "mediumslateblue";
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() == "a") {
    body_page.style.backgroundColor = "orchid";
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() == "d") {
    body_page.style.backgroundColor = "lightpink";
  }
});
document.addEventListener("keyup", function (event) {
  body_page.style.backgroundColor = "darkslategray";
});
document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() == "r") {
    body_page.style.backgroundColor = "indianred";
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() == "b") {
    body_page.style.backgroundColor = "royalblue";
  }
});

const coordiantes = {
  x: 0,
  y: 0,
};

let block = document.querySelector(".block");
document.addEventListener("keydown", function (event) {
  console.log(event.code);
  if (event.code == "KeyW" || event.code == "ArrowUp") {
    --coordiantes.y;
  } else if (event.code == "KeyS" || event.code == "ArrowDown") {
    ++coordiantes.y;
  } else if (event.code == "KeyD" || event.code == "ArrowRight") {
    ++coordiantes.x;
  } else if (event.code == "KeyA" || event.code == "ArrowLeft") {
    --coordiantes.x;
  }
  block.style.transform = `translate(${coordiantes.x}px, ${coordiantes.y}px)`;
});