import React from 'react'

export default class SliderItems extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <li>
                <img src={this.props.item.src} alt={this.props.item.src}/>
            </li>
        )
    }
}