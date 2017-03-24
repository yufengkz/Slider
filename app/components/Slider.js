
import React from 'react'
import SliderDots from './SliderDots'
import SliderItems from './SliderItems'
import SliderArrows from './SliderArrows'
export default class Slider extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nowIndex: 0,
            timer: null
        }
    }
    getNowIndex(n){
        this.setState({nowIndex: n})
    }
    goPlay(){
        if(this.props.autoplay){
            var index = this.state.nowIndex
            var time = this.props.delay || 1
            this.state.timer = setInterval(() => {
                index ++
                if(index > this.props.items.length - 1){
                    index = 0
                }
                this.getNowIndex(index)
            }, time * 1000)
        }
    }
    componentDidMount(){
        this.goPlay()
    }
    clearTimer(){
        clearInterval(this.state.timer)
    }
    render(){
        let count = this.props.items.length
        let itemNodes = this.props.items.map((item, index) => {
            return <SliderItems key={index} count={count} item={item}></SliderItems>
        })

        return (
            <div onMouseEnter={this.clearTimer.bind(this)} onMouseLeave={this.goPlay.bind(this)}>
                {this.props.dots ? <SliderDots len={count} getNowIndex={this.getNowIndex.bind(this)} nowIndex={this.state.nowIndex} ></SliderDots> : null}

                {this.props.arrows ? <SliderArrows count={count} nowIndex={this.state.nowIndex} getNowIndex={this.getNowIndex.bind(this)}></SliderArrows> : null}

                <ul style={{width: count * 100 + '%', left:  - this.state.nowIndex * 100 + '%', transitionDuration: this.props.speed ? this.props.speed : 1.5 + 's',}}>
                    {itemNodes}
                </ul>
            </div>
        )
    }
}