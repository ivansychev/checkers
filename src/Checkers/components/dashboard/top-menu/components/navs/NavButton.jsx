import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import style from "./style.css";

export class NavButton extends React.Component{

    static propTypes = {
        svgArr: PropTypes.arrayOf(PropTypes.object).isRequired,
        options: PropTypes.arrayOf(PropTypes.string).isRequired
    }

    static defaultProps = {

    }

    state = {
        loading: false,
        done: false
    }

    handleClick = () => {
        this.setState({
            loading: true
        })

        setTimeout(()=>{
            this.setState({
                loading: false,
                done: true
            })

            setTimeout(()=>{
                this.setState({
                    loading: false,
                    done: false
                })
            }, 1000)

        }, 1000)

    }

    render(){
        const { svgArr, options } = this.props

        return(
            <div
                className={style.options}
                onClick={this.handleClick}
            >
                <a className={classNames(
                    style.navButton,
                    this.state.loading ? style.loading : '',
                    this.state.done ? style.done : '',
                )}>
                    <span>
                        {svgArr}
                    </span>
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