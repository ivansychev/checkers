import { cellStyles } from "../store/styles"

export default class Cell{
    constructor(x, y, w, h, cellType, theme, hovered, selected){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.cellType = cellType;
        this.theme = theme;
        this.hovered = hovered;
        this.selected = selected;
    }

    drawSelf(ctx){
        const style = cellStyles[this.cellType].themes[this.theme];

        ctx.fillStyle = style.fillStyle

        if(this.hovered){
            ctx.fillStyle = style.hoveredStyle
        }

        if(this.selected){
            ctx.fillStyle = style.selectedStyle
        }

        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}