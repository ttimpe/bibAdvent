class StoneEnemy {
    constructor(x, y) {
        this.x = x | 0;
        this.y = y | 0;
        this.width = 96;
        this.height = 32;
    }
    draw(ctx) {
        ctx.drawImage(textures.stoneEnemy, this.x, this.y);
    }
}
