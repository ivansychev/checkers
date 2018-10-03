import { cellStyles } from "./styles"

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

        if(this.hovered){
            ctx.fillStyle = style.hoveredStyle
        }else if(this.selected){
            ctx.fillStyle = style.selectedStyle
        }else{
            ctx.fillStyle = style.fillStyle
        }

        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}