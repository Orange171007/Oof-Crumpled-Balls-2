   const Engine = Matter.Engine;
   const World = Matter.World;
   const Bodies = Matter.Bodies;
   const Body = Matter.Body;
   var ground;
   var  dustbin;
   var world,engine;
    
    
    function preload(){
    
    }
    
    function setup() {
        createCanvas(800, 500);
        rectMode(CENTER);

        engine = Engine.create();
        world = engine.world;

        ground = new Ground(400,490,800,20);
        paper = new Paper(200,100,70);
        dustbin = new Dustbin(600,480);
        Engine.run(engine);
    }
    
    
    function draw() {
      rectMode(CENTER);
      background(220);
    
    
      paper.display();
     dustbin.display();
     ground.display();
    
      
      
     
    }
    
    
    
    