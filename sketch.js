let tamanho = 20;
function setup() {
  createCanvas(800, 800);
  cobra = new Cobra(width/2, height/2, tamanho);
  frameRate(30);
}

function draw() {
  background(0);
  cobra.desenha();
  cobra.anda();
  cobra.controla();
}
