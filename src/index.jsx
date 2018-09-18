import React, { Component } from 'react';
import ReactDOM from "react-dom";

import style from './style.css';

const stl = { display: "flex" }

class App extends Component{
    render(){
        return(
            <div className={style.container}>
                Checkers are coming soon...
                <div className={style.main}>
                    by Ivan Sychev
                </div>
            </div>

        )
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);