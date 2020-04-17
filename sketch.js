var bad = [5,2,1,0]
var i=255
let que=[]
let ans=[]
let ge=[]
var sc = 0
var tht = 0
var x=109
var y=100
var xp=0
var yp=0
var sp = 0
var tht=0
var bblx=300 ,r=0,t=0,h=0
var ac=0
var q=0
var f = 0
sco = 0
var h =0

function preload()
{
bg = loadImage('bg.jpeg')
hrtb = loadImage('hrtb.png')
bbl = loadImage('bbl.png')
arw = loadImage('arw.png')
ge[0] = loadImage('ge/ge1.png')
ge[1] = loadImage('ge/ge2.png')
ge[2] = loadImage('ge/ge3.png')
ge[3] = loadImage('ge/ge4.png')
ge[4] = loadImage('ge/ge5.png')
ge[5] = loadImage('ge/ge6.png')
 snd = loadSound('Yeah.mp3') 
  
  
}

var paragraph

function setup() {
  createCanvas(420, 600);
btn=createButton('skip question')

inpt= createInput('type your answer')
//inpt.position(0,0)
btn.mousePressed(quest)
que[0] = "Which is the most populous city in INDIA"
que[1] = "Name the first mughal ruler of india"
que[2] = "Ezra cup is related to which sport"
que[3] = "How many parts are ther in our constitution(in digits)"  
que[4] = "When did world war I start(DIGITS ONLY)"
que[5] = "One word for 'fear of dogs'"  
que[6] = "What is the capital of FINLAND"
que[7] = "in which city did COVID-19 started"
que[8] = "Did you enjoyed the quiz?"
  
ans[0] = " mumbai"
ans[1] = " babur"
ans[2] = " polo"
ans[3] = " 22"  
ans[4] = " 1914"
ans[5] = " cynophobia"  
ans[6] = " helsinki"
ans[7] = " wuhan"
ans[8] = " yes"  
}
let bbly =450
let hrty =-60

function quest()
{q++
sco-=2
}
function mousePressed()
{


}

function mouseReleased()
{
  if(mouseY<600)
  {
    sp=90
  }
   if(f <3)
  {
  f++
  }

}



function draw() {
  background(255);
 image(bg,0,0,width,height)
//text("guess"+gue,0,0)
  rect(0,120,2*width,30)
  rect(105,70,width/3-20,25)
 //rect(180,150,width/3+40,300)
  fill(255)
  textSize(20)
  rect(0,120,width,30)
  
  if(i!=0)
  fill(i)
  text(que[q],0,135)         
   i--; 
  fill(0)
  textSize(64)
  rectMode(CENTER)
 push()
 scale(.5)
translate(0,100)
 image(hrtb,40-40,220+40-50,180,180)
 
 image(hrtb,0,220+40+150,180,180)
      

 image(ge[0+sc],80-40,220+40-50,100,150)
  textSize(32)
  text("score is"+sco,20,500)

pop()
  // image(ge[5],420+40,220+40,100,150)
  image(bbl,bblx,bbly,60,60)
  
  if(bbly<60)
  {bbly=height}
  bbly--
  noStroke()
  fill(255)
  textSize(28)
  fill(0)
  text(inpt.value(),105,70) 
  if(" "+inpt.value() == ans[q] &&hrty!=449 )
  {sc = 4
  hrty=450
   q++
   i = 255
    sco = sco+10
  snd.play()
h=0
//gue=" "
  }
   for(var j=0;j<6;j++)
{image(hrtb,0+j*100,hrty,50,50)
 }
 if(hrty>-60)
  hrty--
  
  fill(255)

  var tht = map(mouseY,0,360,0,450)
   push()
  
   translate(xp+20,yp+550)
  rotate(radians(tht))
  rectMode(CENTER)
  
  image(arw,-25,-25,50,50)
 pop()
 xp = xp+sp*cos(radians(tht-45))
  yp = yp+sp*sin(radians(tht-45))

  if(sp>0)
  sp-=.8
   if(yp+400<0 || yp+400>height||xp+200<0||xp+200>width)
   {xp=0
   yp=0
    sp=0

   }
  
  if((yp+400-bbly-30)*(yp+400-bbly-30)+(xp+200-bblx-30)*(xp+200-bblx-30)<30*30)
  {
   r=bblx
   t = bbly
  bbly = 450
 bblx=random(100,300)
    xp=0
   yp=0
    sp=0
  h++    
   sco--
 
    if(f<3)
    sc++
  console.log(f)
//gue+=and[q][h]
  
  }
  fill(0)
  
 text(ans[q][h],r,t) 
 fill(225) 
}
function newText()
{

}
