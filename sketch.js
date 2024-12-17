let boxes = [];
let current_image;

class Box {
  constructor(x, y, w, h, fillColor, sound) {
    this.pos = createVector(x, y);
    this.size = createVector(w, h);
    this.fillColor = fillColor;
    this.sound = sound;
  }

  display() {
    fill(this.fillColor);
    rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
  }

  checkClick() {
    // Check if the mouse is inside this box
    if (
      mouseX > this.pos.x &&
      mouseX < this.pos.x + this.size.x &&
      mouseY > this.pos.y &&
      mouseY < this.pos.y + this.size.y
    ) {
      // If clicked, play the sound if it's not already playing
      if (!this.sound.isPlaying()) {
        this.sound.play();
      }
    }
  }
}

function preload() {
  // Preload three different sound files
  // some annoying synthesizer noises
  sound1 = loadSound('sound1.mp3');
  sound2 = loadSound('sound2.mp3');
  sound3 = loadSound('sound3.mp3');
  
  // Preload four different visual files
  // combined layer, separated RGB gifs
  vis_R = loadImage("DM-R.png")
  vis_G = loadImage("DM-G.png")
  vis_B = loadImage("DM-B.png") 
  
  // current image
  current_image = loadImage("Digital_Media.png");
                            
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  
  // Create three Box instances with different properties
  boxes.push(new Box(50, 100, 80, 80, color(255, 0, 0), sound1));
  boxes.push(new Box(160, 100, 80, 80, color(0, 255, 0), sound2));
  boxes.push(new Box(270, 100, 80, 80, color(0, 0, 255), sound3));
}

function draw() {
  background(220);
  
  // Display each box
  for (let box of boxes) {
    box.display();
  }
}

function mousePressed() {
  // Check if each box is clicked and trigger its sound if so
  for (let box of boxes) {
    box.checkClick();
  }
  
// function changeImage()
}


