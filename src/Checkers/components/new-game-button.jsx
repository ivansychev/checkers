import React from 'react'
import style from'./style.css'
import { CACHE } from '../logic/store/state'
import { socket } from "../logic/game/game"

export class NewGameButton extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            player1: false,
            player2: false
        }

        this.handleClick = this.handleClick.bind(this)
        this.resetState = this.resetState.bind(this)
        this.updateState = this.updateState.bind(this)
    }

    handleClick(){
        if(CACHE.side === 'white'){
            socket.emit('newGame', { player1: !this.state.player1 })
            this.setState({ player1: !this.state.player1 })
        }
        if(CACHE.side === 'black'){
            socket.emit('newGame', { player2: !this.state.player2 })
            this.setState({ player2: !this.state.player2 })
        }
    }

    updateState(data){
        this.setState(data)
    }

    resetState(){
        this.setState({
                player1: false,
                player2: false
            })
    }

    render(){
        return(
            <div className={style.border}>
                <button
                    className={style.newGameButton}
                    onClick={this.handleClick}
                >
                    Начать заново
                </button>
                <div>Белые:
                    <span className={this.state.player1 ? style.green : style.red}>
                        {' ' + this.state.player1}
                    </span>
                </div>
                <div>Черные:
                    <span className={this.state.player2 ? style.green : style.red}>
                        {' ' + this.state.player2}
                    </span>
                </div>
            </div>
        )
    }
}