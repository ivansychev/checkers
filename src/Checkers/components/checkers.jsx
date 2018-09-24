import React from 'react'

import CanvasComponent from './canvas-component.jsx'

import style from "./style.css"

export default class Checkers extends React.Component{

    render(){
        return(
            <div className={style.board}>
                <CanvasComponent/>
            </div>
        )
    }
}