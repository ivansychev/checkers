import {CACHE, CELL_SIDE, CELLS, COORDS, MOUSE, PIECES} from "../store/state";

export function hasCoordsChanged(){
    return (COORDS.x !== CACHE.coords.x || COORDS.y !== CACHE.coords.y)
}

export function hasMouseMoved(){
    return (MOUSE.x !== CACHE.mouse.x || MOUSE.y !== CACHE.mouse.y)
}

export function isMouseOutsideCanvas(){
    return (MOUSE.x === 0 && MOUSE.y === 0 || MOUSE.x < 0 || MOUSE.y < 0)
}

export function isEmptyCell(){
    return !PIECES[COORDS.y][COORDS.x];
}

export function isCacheCoordsInitialized(){
    return !(CACHE.coords.y === 0 && CACHE.coords.x === 0);
}

export function isCacheSelectedInitialized(){
    return (CACHE.selected.y !== null && CACHE.selected.x !== null);
}

export function isSelectedDifferentToClicked(){
    return (CACHE.selected.y !== CACHE.clicked.y || CACHE.selected.x !== CACHE.clicked.x)
}

export function isBlackCell(){
    return CELLS[CACHE.clicked.y][CACHE.clicked.x].cellType !== 0
}

export function getClickedPiece(){
    return PIECES[CACHE.clicked.y][CACHE.clicked.x]
}

export function getPieceColor(piece){
    switch (piece.side) {
        case 1: return 'white'
        case 2: return 'black'
        default: return null
    }
}

export function getTurnColor(){
    return CACHE.turn
}

export function isPlayersTurn(){
    console.log('CLR', getPieceColor(getClickedPiece()))
    return getTurnColor() === getPieceColor(getClickedPiece());
}

export function updateCacheMouse(x, y){
    CACHE.mouse.x = x;
    CACHE.mouse.y = y;
}

export function updateCacheCoords(x, y){
    CACHE.coords.x = x;
    CACHE.coords.y = y;
}

export function updateCoords(x, y){
    COORDS.x = Math.floor(x/CELL_SIDE);
    COORDS.y = Math.floor(y/CELL_SIDE);
}

export function updateCacheSelected(x, y) {
    CACHE.selected.x = Math.floor(x/CELL_SIDE);
    CACHE.selected.y = Math.floor(y/CELL_SIDE);
}

export function updateCacheClicked(x, y) {
    CACHE.clicked.x = Math.floor(x/CELL_SIDE);
    CACHE.clicked.y = Math.floor(y/CELL_SIDE);
}

export function resetCacheSelected() {
    CACHE.selected.x = null;
    CACHE.selected.y = null;
}
export function toggleTurn() {
    CACHE.turn = CACHE.turn === 'white' ? 'black' : 'white'
}