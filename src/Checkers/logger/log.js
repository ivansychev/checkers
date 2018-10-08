import { CACHE, CELLS, PIECES, CELL_SIDE, RADIUS, COORDS, MOUSE } from "../logic/store/state";

export function logCache(){
    console.log(
        `Cache: 
       \x1b[37m mouse:{x:${CACHE.mouse.x}, y:${CACHE.mouse.y}}, 
       \x1b[37m coords:{x:${CACHE.coords.x}, y:${CACHE.coords.y}}, 
       \x1b[36m selected:{x:${CACHE.selected.x}, y:${CACHE.selected.y}},
       \x1b[35m clicked:{x:${CACHE.clicked.x}, y:${CACHE.clicked.y}},`
    )
}