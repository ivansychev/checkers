import React from 'react';
import classNames from 'classnames'

import style from './style.css';

export const Avatar = () => (
    <div
        className={classNames(style.img_circular, style.user_avatar)}
    >
        <img
            src='https://via.placeholder.com/150'
            className={style.img_circular}
        />
    </div>
)
