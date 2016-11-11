class Button {
    // 0: No hover
    // 1: hover
    // 2: active

    constructor(text, left, top, width, height) {
        this.text = text;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.state = 0;
        this.backgroundColor = '#888';
        this.textColor = '#000'
    }
    click() {

    }
    draw(context) {
        context.fillStyle=this.backgroundColor;
        context.fillRect(this.left, this.top, this.width, this.height);
        context.textAlignment = 'center';
        context.fillStyle = this.textColor;

        console.log(this.height + 'px ' + context.font.substring(context.font.indexOf(' ')+1))

        context.fillText(this.text, this.left + (this.width/2), this.top + (this.height / 2));

        switch (this.state) {
            case 1:
            context.fillStyle = 'rgba(255,255,255,0.2)';
            context.fillRect(this.left, this.top, this.width, this.height);

            break;
            case 2:
            context.fillStyle = 'rgba(0,0,0,0.2)';
            context.fillRect(this.left, this.top, this.width, this.height);

            break;
        }

    }


}
