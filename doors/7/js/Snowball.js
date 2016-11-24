class Snowball {
    constructor(x, y, angle) {
        this.x = parseInt(x);
        this.y = parseInt(y);
        this.width = 48;
        this.height = 48;
        this.angle = angle;
        this.timer = null;
        console.log(x);
        console.log(y);
    }
    fire() {
        // tick
        var that = this;
        var i = 0;
        var m = Math.tan(Math.abs(that.angle));
      this.timer = window.setInterval(function () {
            // y = m * x + b | /m
            // y/m = x+b
            // y/m - b = x



            // this.y = this.y - 1;
            // this.x = Math.tan(this.angle) * this.x;


            // if angle positive, x has to increase, if angle negative decrease x
            console.log('cannon angle ' + that.angle);
            console.log('m is ' + m)

            if (that.angle < 90) {
                console.log('x needs to decrease');
            } else {
                console.log('x needs to increase');
            }

            that.y--;
            that.x = that.x - m;
            console.log('x ' + that.x  + '; y '   + that.y);
            i++;
            if (that.x <= 0 || that.x >= c.width || that.y <= 0) {
                that.onCollideWithWall();
            } else {
                for (var s in enemies) {
                }
            }
        },5);




    }
    draw(ctx) {
        ctx.drawImage(textures.snowball, this.x - this.width/2, this.y - this.height/2);
    }
    onCollideWithWall() {
        clearInterval(this.timer);
    }
    onCollideWithStone(stone) {

    }




}
