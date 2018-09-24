import React, { Component } from 'react';
import ReactDOM from "react-dom";

import style from './style.css';
import Checkers from "./Checkers/components/index";

class App extends Component{
    render(){
        return(
            <div>
                Checkers are coming soon...
                <div className={style.main}>
                    by Ivan Sychev
                </div>
                <Checkers/>
            </div>
        )
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);