import React from 'react'

import { launchGame, pieceSelectionRoutine, pieceHoverRoutine } from "../logic/game/game"
import { MOUSE } from "../logic/store/state"
import * as utils from "../logic/game/utils"

export let CXT;

export default class CanvasComponent extends React.Component{

    constructor(){
        super()

        this.getMousePos = this.getMousePos.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        const canvas = this.refs.canvas;
        CXT = canvas.getContext('2d');
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
        pieceSelectionRoutine()
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