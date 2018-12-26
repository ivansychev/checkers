import React, { Component } from 'react';

import style from './style.css';
import {Avatar, NavButton} from "./components";
import { CircledArrow, Check, Circle } from "../../../../icons";

export default class TopMenu extends Component{
    render(){
        return(
            <div className={style.container}>
                <div className={style.subcontainer}>
                    <NavButton
                        svgArr={[
                            <Circle key={0}/>,
                            <CircledArrow key={1}/>,
                            <Check key={2}/>]}
                        options={['Начать заново', 'Ждем ответа', 'Принято']}
                    />
                </div>
                <div className={style.subcontainer}>
                    <div className={style.creds}>
                        <div className={style.user_name}>
                            UserName
                        </div>
                        <Avatar/>
                    </div>
                </div>
            </div>
        )
    }
}
