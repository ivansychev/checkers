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
        done: false,
        error: false
    }

    handleClick = () => {
        this.setState({
            loading: true
        })

        if(Math.random() > .5){
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
                }, 1500)

            }, 3000)
        }
        else{
            setTimeout(()=>{
                this.setState({
                    loading: false,
                    error: true
                })

                setTimeout(()=>{
                    this.setState({
                        loading: false,
                        error: false
                    })
                }, 1500)

            }, 3000)
        }


    }

    render(){
        const { svgArr, options } = this.props

        return(
            <div
                className={classNames(
                    style.options,
                    this.state.done ? style.done : '',
                    this.state.error ? style.error : '',
                )}
                onClick={this.handleClick}
            >
                <a className={classNames(
                    style.navButton,
                    this.state.loading ? style.loading : '',
                    this.state.done ? style.done : '',
                    this.state.error ? style.error : '',
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