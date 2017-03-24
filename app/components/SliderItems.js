import React from 'react'

export default class SliderItems extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let w = 100 / this.props.count + '%'
        return(
            <li style={{width: w}}>
                <img src={this.props.item.src} alt={this.props.item.src}/>
            </li>
        )
    }
}