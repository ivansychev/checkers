import React, { Component } from 'react';

import style from './style.css';
import {Avatar} from "./components";

export default class TopMenu extends Component{
    render(){
        return(
            <div className={style.container}>
                <div className={style.subcontainer}>
                    <div className={style.options}>
                        <span>
                            Новая игра
                        </span>
                    </div>
                    <div className={style.options}>
                        <span>
                            Сдаться
                        </span>
                    </div>
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
