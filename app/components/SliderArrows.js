import React from 'react'
import $ from 'jquery'
export default class SliderArrows extends React.Component{
    handleLeft(){
        var index = this.props.nowIndex
        index --
        if(index <= -1){
            index = this.props.count - 1
        }
        this.props.getNowIndex(index)
        $('#sliders').animate({left:- index * 100 + '%'})
    }
    handleRight(){
        var index = this.props.nowIndex
        index ++
        if(index >= this.props.count + 1){
            index = 1
            $('#sliders').css({left: 0})
        }
        this.props.getNowIndex(index)
        $('#sliders').animate({left:- index * 100 + '%'})
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