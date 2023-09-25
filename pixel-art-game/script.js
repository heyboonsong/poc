const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.heigth = 500;

const keys = [];

const player = {
  x: 300,
  y: 50,
  width: 40,
  heigth: 72,
  frameX: 0,
  frameY: 0,
  speed: 2,
  moving: false,
};

const playerSprite = new Image();
playerSprite.src = "./assets/chewie.png";
const background = new Image();
background.src = "./assets/background.png";

setInterval(function () {
  ctx.clearRect(0, 0, canvas.width, 150);
  ctx.drawImage(background, 0, 0, canvas.width, 150);
  drawSprite(
    playerSprite,
    player.width * player.frameX,
    player.heigth * player.frameY,
    player.width,
    player.heigth,
    player.x,
    player.y,
    40,
    21
  );
  movePlayer();
  handlePlayerFrame();
  requestAnimationFrame(animate);
}, 100);
function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

// function animate() {
//   ctx.clearRect(0, 0, canvas.width, 150);
//   ctx.drawImage(background, 0, 0, canvas.width, 150);
//   drawSprite(
//     playerSprite,
//     player.width * player.frameX,
//     player.heigth * player.frameY,
//     player.width,
//     player.heigth,
//     player.x,
//     player.y,
//     40,
//     21
//   );
//   movePlayer();
//   handlePlayerFrame();
//   requestAnimationFrame(animate);
// }
// animate();

window.addEventListener("keydown", function (e) {
  keys[e.keyCode] = true;
  player.moving = true;
});
window.addEventListener("keyup", function (e) {
  delete keys[e.keyCode];
  player.moving = false;
});

function movePlayer() {
  if (keys[38] && player.y > 0) {
    player.y -= player.speed;
    player.frameY = 3;
  }
  if (keys[37] && player.x > 0) {
    player.x -= player.speed;
    player.frameY = 1;
  }
  if (keys[40] < 150 - player.heigth) {
    player.y += player.speed;
    player.frameY = 0;
  }

  if (keys[39]) {
    player.x += player.speed;
    player.frameY = 2;
  }
}

function handlePlayerFrame() {
  if (player.frameX < 3 && player.moving) player.frameX++;
  else player.frameX = 0;
}
