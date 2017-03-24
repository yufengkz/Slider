import React from 'react'

export default class SliderArrows extends React.Component{
    handleLeft(){
        var index = this.props.nowIndex
        index --
        if(index <= -1){
            index = this.props.count - 1
        }
        this.props.getNowIndex(index)
    }
    handleRight(){
        var index = this.props.nowIndex
        index ++
        if(index > this.props.count - 1){
            index = 0
        }
        this.props.getNowIndex(index)
    }
    render(){
        return(
            <div className="arrows">
                <span className="leftBtn" onClick={this.handleLeft.bind(this)}>&lt;</span>
                <span className="rightBtn" onClick={this.handleRight.bind(this)}>&gt;</span>
            </div>
        )
    }
}