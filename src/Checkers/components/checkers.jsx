import React from 'react'

import CanvasComponent from './canvas-component.jsx'
import Turn from "./turn.jsx"

import style from "./style.css"
import Players from "./players.jsx";
import { NewGameButton } from "./new-game-button.jsx";

export default class Checkers extends React.Component{

    render(){
        return(
            <div className={style.board}>
                <Turn ref={(turnComponent) => {window.turnComponent = turnComponent}} />
                <Players ref={(playersComponent) => {window.playersComponent = playersComponent}}/>
                <CanvasComponent/>
                <NewGameButton ref={(newGameButton) => {window.newGameButton = newGameButton}}/>
            </div>
        )
    }
}