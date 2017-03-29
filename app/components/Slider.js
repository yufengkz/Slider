
import React from 'react'
import SliderDots from './SliderDots'
import SliderItems from './SliderItems'
import SliderArrows from './SliderArrows'
import $ from 'jquery'
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
                if(index >= this.props.items.length + 1){
                    index = 1
                    $('#sliders').css({left: 0})
                }
                this.getNowIndex(index)
                $('#sliders').animate({left:- index * 100 + '%'})
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
        let style = {
            width: (count + 2) * 100 + '%',
            //left:  - this.state.nowIndex * 100 + '%',
            /*transitionDuration: this.props.speed ? this.props.speed : 1.5 + 's'*/}

        let itemNodes = this.props.items.map((item, index) => {
            return <SliderItems key={index} count={count} item={item}></SliderItems>
        })

        return (
            <div onMouseEnter={this.clearTimer.bind(this)} onMouseLeave={this.goPlay.bind(this)}>
                {this.props.dots ? <SliderDots len={count} getNowIndex={this.getNowIndex.bind(this)} nowIndex={this.state.nowIndex} ></SliderDots> : null}

                {this.props.arrows ? <SliderArrows count={count} nowIndex={this.state.nowIndex} getNowIndex={this.getNowIndex.bind(this)}></SliderArrows> : null}

                <ul id="sliders" style={style}>
                    {itemNodes}
                    <li style={{width: '600px'}}>
                        <img src={this.props.items[0].src} alt={this.props.items[0].src}/>
                    </li>
                </ul>
            </div>
        )
    }
}