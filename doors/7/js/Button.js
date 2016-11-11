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
    }
    click() {

    }
    draw(context) {
        
        context.fillRect(this.left, this.top, this.width, this.height);
    }

}
