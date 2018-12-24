import React, { Component } from 'react';
import ReactDOM from "react-dom";

import style from './style.css';
import Main from './Checkers/main.jsx'

class App extends Component{
    render(){
        return(
            <Main/>
        )
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);