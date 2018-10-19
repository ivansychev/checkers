import React from 'react'

import { launchGame, pieceSelectionRoutine, pieceHoverRoutine, pieceMovementRoutine } from "../logic/game/game"
import {MOUSE} from "../logic/store/state"
import * as utils from "../logic/game/utils"
import {logCache} from "../logger/log";

export let CXT, C;

export default class CanvasComponent extends React.Component{

    constructor(){
        super()

        this.getMousePos = this.getMousePos.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        C = this.refs.canvas;
        CXT = C.getContext('2d');
        launchGame()
    }

    getMousePos(e) {
        const canvas = this.refs.canvas;
        let rect = canvas.getBoundingClientRect();
        MOUSE.x = e.clientX - rect.left;
        MOUSE.y = e.clientY - rect.top;
        utils.updateCoords(MOUSE.x, MOUSE.y)

        pieceHoverRoutine()
    }

    handleClick(){
        utils.updateCacheClicked(MOUSE.x, MOUSE.y)
        console.log('-----------------------')
        logCache()
        pieceSelectionRoutine()
        logCache()
        pieceMovementRoutine()
        logCache()
        console.log('-----------------------')
    }

    render(){
        return(
            <canvas
                ref="canvas"
                width={400}
                height={400}
                onMouseMove={this.getMousePos}
                onClick={this.handleClick}
            />
        )
    }
}