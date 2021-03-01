var diary, diaryImg;
var voldemortImg, voldemort;
var obstacles, obstacleImg;

function preload(){
diaryImg = loadImage('images/TM Diary.jpg');
voldemortImg = loadImage('images/voldemort.jpg');
obstacleImg = loadImage('images/Albus.png');
}

function setup(){
createCanvas(1000,600);
diary = createSprite(100,300,10,10);
diary.addImage(diaryImg);
//diary.scale(0.5);
voldemort = createSprite(900,300,10,10);
voldemort.addImage(voldemortImg);
//voldemort.scale(0.5);
obstacles = createSprite(350,300,10,5);
obstacles.addImage(obstacleImg);
//obstacles.scale(0.5);
}

function draw(){
background(38,45,69);
textSize(50);
stroke("yellow");
text("DELIVER THE DIARY!", 300, 50);



















































































































drawSprites();
    
}