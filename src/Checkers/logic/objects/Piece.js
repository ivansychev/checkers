import { pieceStyles } from "../store/styles.js"

const PI = Math.PI

export default class Piece{

    constructor(x, y, side, theme, radius, hovered, selected){
        this.x = x;
        this.y = y;
        this.side = side;
        this.theme = theme;
        this.radius = radius;
        this.hovered = hovered;
        this.selected = selected;
    }

    drawSelf(ctx){
        const style = pieceStyles[this.side].themes[this.theme];

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0 , 2*PI);
        ctx.fillStyle = style.fillStyle;
        ctx.fill();
        ctx.strokeStyle = style.strokeStyle;
        ctx.lineWidth = this.radius*0.25;
        ctx.stroke();
        ctx.closePath()
    }
}