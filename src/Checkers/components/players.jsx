import React from 'react'

export default class Players extends React.Component{
    constructor(){
        super()
        this.state = {
            player1: null,
            player2: null
        }

        this.setPlayers = this.setPlayers.bind(this)
    }

    setPlayers(data){
        this.setState({
            player1: data.player1 && data.player1.id,
            player2: data.player2 && data.player2.id
        })
    }

    render(){
        return(
            <div>
                <div>Белые: {this.state.player1}</div>
                <div>Черные: {this.state.player2}</div>
            </div>
        )
    }
}