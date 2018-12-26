import React, { Component } from 'react';

import style from './style.css';
import {Avatar, NavButton} from "./components";
import {CircledArrow, Check, Circle, Cross, Warning} from "../../../../icons";

export default class TopMenu extends Component{
    render(){
        return(
            <div className={style.container}>
                <div className={style.subcontainer}>
                    <NavButton
                        svgArr={[
                            <Circle key={0}/>,
                            <CircledArrow key={1}/>,
                            <Check key={2}/>,
                            <Cross key={3}/>]}
                        options={['Начать заново', 'Ждем ответа', 'Начало новой игры', 'Отклонено']}
                    />
                    <NavButton
                        svgArr={[
                            <Circle key={0}/>,
                            <Warning key={1}/>,
                            <Check key={2}/>,
                            <Cross key={3}/>]}
                        options={['Сдаться', 'Завершение игры', 'Игра завершена', 'Ошибка']}
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
