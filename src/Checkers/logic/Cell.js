import { cellStyles } from "./styles"

export default class Cell{
    constructor(x, y, w, h, cellType, theme, selected){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.cellType = cellType;
        this.theme = theme;
        this.selected = selected;
    }

    drawSelf(ctx){
        const style = cellStyles[this.cellType].themes[this.theme];

        ctx.fillStyle = this.selected ? style.selectedStyle : style.fillStyle;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}