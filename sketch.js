const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boy, stone;
var backgroundImg;
var tree, slingShot1;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9;

function preload() {
    backgroundImg = loadImage("bg.png");
}

function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(width / 2,height - 20,width,20);

    boy = new Boy(300, height - 125, 250, 200);

    tree = new Tree(width - 300,height - 260, 500,height - 120);

    mango1 = new Mango(1000,180, 40);
    mango3 = new Mango(1100,240, 40);
    mango3 = new Mango(1100,240, 40);
    mango2 = new Mango(1000,260, 40);
    mango3 = new Mango(1100,240, 40);
    mango4 = new Mango(1200,240, 40);
    mango5 = new Mango(1100,180, 40);
    mango6 = new Mango(1125,130, 40);
    mango7 = new Mango(950,250, 40);
    mango8 = new Mango(910,240, 40);
    mango9 = new Mango(1250,260, 40);

    stone = new Stone(400, height - 195, 50);

    slingShot1 = new SlingShot(stone.body, {x: 400, y: height - 195});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);

    boy.display();

    ground.display();

    tree.display();

    stone.display();

    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    mango9.display();

    slingShot1.display();  

    if (collided(stone, mango1)) {
        Matter.body.setStatic(mango1.body, false);
    }
    if (collided(stone, mango2)) {
        Matter.body.setStatic(mango2.body, false);
    }
    if (collided(stone, mango3)) {
        Matter.body.setStatic(mango3.body, false);
    }
    if (collided(stone, mango4)) {
        Matter.body.setStatic(mango4.body, false);
    }
    if (collided(stone, mango5)) {
        Matter.body.setStatic(mango5.body, false);
    }
    if (collided(stone, mango6)) {
        Matter.body.setStatic(mango6.body, false);
    }
    if (collided(stone, mango7)) {
        Matter.body.setStatic(mango7.body, false);
    }
    if (collided(stone, mango8)) {
        Matter.body.setStatic(mango8.body, false);
    }
    if (collided(stone, mango9)) {
        Matter.body.setStatic(mango9.body, false);
    }

    detectollision(mango1, stone);
    detectollision(mango2, stone);
    detectollision(mango3, stone);
    detectollision(mango4, stone);
    detectollision(mango5, stone);
    detectollision(mango6, stone);
    detectollision(mango7, stone);
    detectollision(mango8, stone);
    detectollision(mango9, stone);
}

function keyPressed() {
    if(keyCode === 32){
        Matter.Body.setPosition(stone.body, {x: 400, y: height - 195})
        slingShot1.attach(stone.body);
    }
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}
function mouseReleased() {
    slingShot1.fly();
}
function detectollision(object1, object2) {
    mangoBodyPosition = object1.body.position;
    stoneBodyPosition = object2.body.position;
    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
    if (distance<= object1.r + object2.r) {
        Matter.Body.setStatic(object1.body, false);
    }
}
