

class Ant {
    x ;
    y;
    heading;


    sensorDist=40;
    moveDist=2;
    size=1;
    haveFood=0;
    rotAngle=5;
    sensorAngle=20;




    constructor(){
        this.x =100;
        this.y =100;
        // this.x =random(width);
        // this.y =random(height);
        this.heading=random(360)

        
    }

    display(){


        fill("red")
        circle(this.x,this.y,this.size)

    }

    update(){

        const sensorDist=this.sensorDist;
        const moveDist=this.moveDist;
        const d=1;        
        
        const fIndex=floor(this.x+sensorDist*cos(this.heading))+width*floor(this.y+sensorDist*sin(this.heading));
        let f=pixels[4*d*fIndex+(1-this.haveFood)];

        const lIndex=floor(this.x+sensorDist*cos(this.heading-this.sensorAngle))+width*floor(this.y+sensorDist*sin(this.heading-this.sensorAngle));
        let l=pixels[4*d*lIndex+(1-this.haveFood)]

        const rIndex=floor(this.x+sensorDist*cos(this.heading+this.sensorAngle))+width*floor(this.y+sensorDist*sin(this.heading+this.sensorAngle));
        let r=pixels[4*d*rIndex+(1-this.haveFood)]


        if (f>l && f>r){
            this.x+=moveDist*cos(this.heading);
            this.y+=moveDist*sin(this.heading);
        }
        else if (l>f && l>r){
            this.heading=((this.heading- this.rotAngle) % 360)
            this.x+=moveDist*cos(this.heading);
            this.y+=moveDist*sin(this.heading);
        }else if (r>f && r >l){            
            this.heading=(this.heading+ this.rotAngle) % 360;
            this.x+=moveDist*cos(this.heading);
            this.y+=moveDist*sin(this.heading);
        }else{
            const r=random(1);
            if (r<0.5){
                this.heading=((this.heading+this.rotAngle) % 360);
            }else if (r<1){
                this.heading=((this.heading-this.rotAngle) % 360);
            }else{
                this.heading=((this.heading+random(360)) % 360);

            }
            this.x+=moveDist*cos(this.heading);
            this.y+=moveDist*sin(this.heading);


            // if (f==l && l==r && f==0 ){
            //                 const r=random(1);
            // if (r<0.5){
            //     this.heading=((this.heading+this.rotAngle) % 360);
            // }else if (r<1){
            //     this.heading=((this.heading-this.rotAngle) % 360);
            // }else{
            //     this.heading=((this.heading+random(360)) % 360);

            // }
            // this.x+=moveDist*cos(this.heading);
            // this.y+=moveDist*sin(this.heading);
            // }
            // else{
            //     this.x+=moveDist*cos(this.heading);
            //     this.y+=moveDist*sin(this.heading);
            // }
        }

        if (!this.haveFood){
            const cFood=pow((this.x-width+100),2)+pow((this.y-height+100),2) < pow(50,2);
            if (cFood){
                this.heading=(this.heading+180) % 360;
                this.haveFood=1
            }
        }
        
        if (this.haveFood){            
            const cHome=pow((this.x-100),2)+pow((this.y-100),2) < pow(50,2);
            if (cHome){
                this.heading=(this.heading+180) % 360;
                this.haveFood=0
            }
        }



        if (this.haveFood===1){
            fill("green")
        }else{
            fill("red")
        }

        if (this.x>=width || this.y>=height || this.y <=0 || this.x<=0){
            this.heading=(this.heading+180) % 360;
            this.x+=4*moveDist*cos(this.heading);
            this.y+=4*moveDist*sin(this.heading);
        }
        circle(this.x,this.y,this.size);

        
        
    }


}

