import {CACHE, CELL_SIDE, CELLS, COORDS, HALF_CELLS_SIDE, MOUSE, PIECES} from "../store/state";

export function hasCoordsChanged(){
    return (COORDS.x !== CACHE.coords.x || COORDS.y !== CACHE.coords.y)
}

export function hasMouseMoved(){
    return (MOUSE.x !== CACHE.mouse.x || MOUSE.y !== CACHE.mouse.y)
}

export function isMouseOutsideCanvas(){
    return (MOUSE.x === 0 && MOUSE.y === 0 || MOUSE.x < 0 || MOUSE.y < 0)
}

export function isEmptyCell(x = COORDS.x, y = COORDS.y){
    return !PIECES[y][x];
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

export function isPlayersPiece(){
    return getTurnColor() === getPieceColor(getClickedPiece());
}

export function isOpponentsPiece(){
    if(getPieceColor(getClickedPiece())) return false;
    return getTurnColor() !== getPieceColor(getClickedPiece());
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

export function setCahceSelectedEqualToCacheClicked(){
    CACHE.selected.x = CACHE.clicked.x
    CACHE.selected.y = CACHE.clicked.y
}

export function resetCacheSelected() {
    CACHE.selected.x = null;
    CACHE.selected.y = null;
}

export function toggleTurn() {
    CACHE.turn = CACHE.turn === 'white' ? 'black' : 'white'

    //TODO: remove in he future
    window.turnComponent.setTurn(CACHE.turn)
}

export function updatePlayersData(data){
    //TODO: remove in he future
    window.playersComponent.setPlayers(data)
}

export function initLegalMoves() {
    PIECES.forEach((row) => {
        row.forEach((value) => {
            if(value) value.fillLegalMoves()
        })
    })
}

export function eatPieceIfExists(legalMove){
    if(legalMove.eat && legalMove.eat.x && legalMove.eat.y){
        PIECES[legalMove.eat.y][legalMove.eat.x]=0
        CACHE.hasEaten = true
    }
}

export function movePiece(piece){
    piece.x = CELL_SIDE * CACHE.clicked.x + HALF_CELLS_SIDE;
    piece.y = CELL_SIDE * CACHE.clicked.y + HALF_CELLS_SIDE;

    piece.cellX = CACHE.clicked.x
    piece.cellY = CACHE.clicked.y

    PIECES[CACHE.selected.y][CACHE.selected.x] = 0;
    PIECES[CACHE.clicked.y][CACHE.clicked.x] = piece;
}

export function getSideLength(){
    let w = window.innerWidth - 150;
    if(w < 400) w = 400;
    if(w > 1000) w = 1000;

    let h = window.innerHeight - 300;
    if(h < 400) h = 400;
    if(h > 1000) h =  1000;

    if(w <= h) return w;
    if(w >= h) return h;
}

export function updateCellsSize(CELL_SIDE){
    CELLS.forEach((row, i) => {
        row.forEach((val, j) => {
            val.x = j * CELL_SIDE;
            val.y = i * CELL_SIDE;
            val.w = CELL_SIDE
            val.h = CELL_SIDE
        })
    })
}

export function updatePiecesSize(CELL_SIDE, RADIUS){
    PIECES.forEach((row, i) => {
        row.forEach((val, j) => {
            if(val !== 0){
                val.x = CELL_SIDE * j + HALF_CELLS_SIDE
                val.y = CELL_SIDE * i + HALF_CELLS_SIDE
                val.radius = RADIUS
            }
        })
    })
}

export function updateCanvasSize(){
    const c = document.getElementsByTagName('canvas')[0]
    c.width = getSideLength()
    c.height = getSideLength()
}