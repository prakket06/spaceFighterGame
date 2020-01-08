const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var BackGround ;

var a = 0;

function preload() {
} 

function setup(){
    createCanvas(displayWidth - 20 ,displayHeight - 200);
    engine = Engine.create();
    world = Engine.world;
    title = createElement('h1');
    title.html("Space Fighter");
    title.position(displayWidth /2-50, 0);
    BackGround = loadImage("space.png");
    button2 = createButton('Tutorial');
    button2.position(displayWidth/2+22.5, displayHeight/2 + 50);
    button = createButton('Play');
    button.position(displayWidth/2+30, displayHeight/2);
    button.mousePressed(()=>{
        this.button.hide();
        title.hide();
        this.button2.hide();
        levelSelection();
    });
    button2.mousePressed(()=>{
        this.button.hide();
        title.hide();
        this.button2.hide();
        tutorial();
    })

    
   

   

}

function draw(){
    background(BackGround);

   

    if(a == 2){
        textFont("Trebuchet");
        textSize(40);
        text("Welcome space fighter",displayWidth/2-120, displayHeight/2 - 325 );
        textSize(30);
        text("If you are playing on computer use right & left arrow keys to control the spaceship and space button to attack.",displayWidth/2-675, displayHeight/2 - 250);
        text("If you are playing on mobile or tablet press the keys given on the screen to control.",displayWidth/2-675, displayHeight/2 - 150)
        text("Press 'L' to go to select level",displayWidth/2, displayHeight/2 - 50);
        
        
    }
    if(keyCode == 76){
        a = 1;
    }

    

    if(a == 1){
        button3 = createButton("Level-1");
        button3.position(displayWidth/2-250, displayHeight/2-100);
        button3.mousePressed(()=>{
            button3.hide();
            level1();
        })
        button4 = createButton("Locked");
        button4.position(displayWidth/2, displayHeight/2-100);
        button5 = createButton("Locked");
        button5.position(displayWidth/2+250, displayHeight/2-100)

    }

    if(a == 3){
        background();
    }

    console.log(a);
    
}   

function levelSelection (){
    a = a + 1;
    
}

function level1 (){
    a = 3;
}

function tutorial(){
    a = a + 2;
}

function background(){
    space = createSprite(displayWidth/2,displayHeight/2);
    space = loadImage("space2.png");
    drawSprites();
}