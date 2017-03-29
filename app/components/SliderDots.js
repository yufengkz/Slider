import React from 'react'

export default class SliderDots extends React.Component{
    constructor(props){
        super(props)
    }
    handleClick(i){
        this.props.getNowIndex(i)
    }
    render(){
        var dots = []
        for(let i = 0; i < this.props.len; i ++){
            dots.push(<a href="javascript:;" key={i} onClick={this.handleClick.bind(this, i)}
                         className={(i == this.props.nowIndex || this.props.nowIndex == this.props.len && i == 0) ? 'on' : ''} >{i + 1}</a>)
        }
        return(
            <p>
                {
                    dots
                }
            </p>
        )
    }
}