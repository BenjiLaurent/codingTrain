let particles=[];
let cycle=0;
let angleStart;
function setup() {
//  angleMode(DEGREES);
  createCanvas(
    window.innerWidth,
    window.innerHeight);
  }

function draw() {
//  rotateX(0.8);
  background(255);
  for (let i= 0; i<10; i++){
    angleStart = random(1,360);
  let p=new Particle();
  particles.push(p);
  stroke(255);

  }

  for (let i=particles.length-1; i>=1; i--){
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()){
        particles.splice(i,1);
    }

  }
}


class Particle{


  constructor(){

    this.x =mouseX + 30 * cos(angleStart);
    this.y =mouseY + 30* sin(angleStart);
    this.vx=cos(random(-180,180));
    this.vy= sin(random(-180,180));
    this.alpha= 255;
    this.color1 = random(1,255);
    this.color2 = random(1,255);
    this.color3 = random(1,255);
    this.size=random(1,15);
  }


finished(){
  return this.alpha <0;
}


update(){
this.x += this.vx;
this.y += this.vy;
this.vx -=0.2;
this.vx -=0.4;
this.alpha -=4;
this.size-=2;
}

  show(){
  noStroke();
    fill(this.color1,this.color2,this.color3,this.alpha);
    ellipse(this.x, this.y, this.size);

  }

}
