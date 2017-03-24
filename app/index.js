import React from 'react'
import ReactDOM from 'react-dom'

require('./slider.css')

import Slider from './components/Slider'

var IMAGE_DATA = [
    {src: require('./imgs/0.jpg'), alt: '0'},
    {src: require('./imgs/1.jpg'), alt: '0'},
    {src: require('./imgs/2.jpg'), alt: '0'},
    {src: require('./imgs/3.jpg'), alt: '0'},
    {src: require('./imgs/4.jpg'), alt: '0'},
]

ReactDOM.render(<Slider  items={IMAGE_DATA}
                         speed={1.5}
                         delay={2}
                         pause={true}
                         autoplay={true}
                         dots={true}
                         arrows={true}></Slider>,
    document.querySelector('#app'))



