const element=document.querySelector("#app");


let ants=[];

console.log(ants.length);

function setup(){
     createCanvas(element.clientWidth,element.clientHeight).parent(element)     
     
     angleMode(DEGREES);
     noStroke();
     background(0)
     frameRate(240);
     pixelDensity(1);
     loadPixels()
     const cIndex=floor(width-100)+floor((height-100)*width);
console.log((height),width);

     
     for (let index = 0; index <5000; index++) {
         ants.push(new Ant());
        }
        for (let index = 0; index < ants.length; index++) {
            ants[index].display()
        }
        
        // console.log(ants[0]);
        
        
    }
    
    function  draw(){
        // console.log(ants);
        // console.log(width-100,height-100);
        
        background(0,15)
        
        fill(0,255,0)
        circle(width-100,height-100,100)
        fill(255,0,0)
        circle(100,100,100)
        loadPixels();
        for (let index = 0; index < ants.length; index++) {
            ants[index].update()
        }
    }





