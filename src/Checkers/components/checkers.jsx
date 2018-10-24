import React from 'react'

import CanvasComponent from './canvas-component.jsx'
import Turn from "./turn.jsx"

import style from "./style.css"

export default class Checkers extends React.Component{

    render(){
        return(
            <div className={style.board}>
                <Turn ref={(tempComponent) => {window.tempComponent = tempComponent}} />
                <CanvasComponent/>
            </div>
        )
    }
}