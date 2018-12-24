import React, { Component } from 'react';

import style from './style.css';
import {Avatar, Nav} from "./components";
import { Message, Check } from "../../../../icons";

export default class TopMenu extends Component{
    render(){
        return(
            <div className={style.container}>
                <div className={style.subcontainer}>
                    <Nav
                        svgArr={[<Message key={1}/>, <Check key={2}/>]}
                        options={['Начать зановоб', 'Принято']}
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
