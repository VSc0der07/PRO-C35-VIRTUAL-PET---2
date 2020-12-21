//Create variables here
var dogImg, happyDog, database, foodS, foodStock, dog
var feed, addFood
varfedTime, lastFed
var foodObj

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
  foodStock.set(20);

dog = createSprite(250,350,10,60)
dog.addImage(dogImg)
dog.scale = 0.2

readStock();
}


function draw() {  
background("lightBlue");

if (foodS!==undefined){

}


if (foodS === 0){

foodS = 20

}
 

foodObj.display();

  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });
 
  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Feed : "+ lastFed%12 + " PM", 350,30);
   }else if(lastFed==0){
     text("Last Feed : 12 AM",350,30);
   }else{
     text("Last Feed : "+ lastFed + " AM", 350,30);
   }
   drawSprites();
  //add styles here
  textSize(20);
  fill(255);
  text("Note: Press UP ARROW KEY to feed MAX the dog",50,50)
  text("Food Remaining" + foodS ,150,150)

}

function writeStock (x){

if (x<=0){
x=0
}
else{
  x=x+1;
}
database.ref("Food").update({
  Food:x
});

}

function readStock(data){

foodS = data.val();

}

function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}