import React from 'react'
import PropTypes from 'prop-types'

import style from "./style.css";

export class Nav extends React.Component{

    static propTypes = {
        svgArr: PropTypes.arrayOf(PropTypes.object).isRequired,
        options: PropTypes.arrayOf(PropTypes.string).isRequired
    }

    static defaultProps = {

    }

    render(){
        const { svgArr, options } = this.props

        return(
            <div className={style.options}>
                <a className="activate">
                    {svgArr}
                    <ul>
                        {options.map((opt, index)=>
                            <li key={index}>{opt}</li>
                        )}
                    </ul>
                </a>
            </div>
        )
    }
}