import React from 'react'

export default class Turn extends React.Component{

    constructor(){
        super()
        this.state = {
            turn: 'white'
        }
        this.setTurn = this.setTurn.bind(this)
    }

    setTurn(turn){
        this.setState({turn: turn})
    }

    render(){
        return(
            <div>
                Ход:
                <span>
                        {this.state.turn === 'white' ? ' Белые' : ' Черные'}
                    </span>
            </div>
        )
    }
}