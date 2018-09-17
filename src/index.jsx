import React from 'react'
import ReactDOM from "react-dom";

import style from './style.css'

class App extends React.Component{
    render(){
        return(
            <div className={style.container}>
                <h1 className={style.main}>Checkers Web App</h1>
                <h3>coming soon...</h3>
            </div>
        )
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);