

import React from 'react';
import { Carousel } from 'antd';
import { SliderData } from '../ImageSlider/SliderData';
import './ActivitySlider.css';

const ActivitySlider = () => {
    const contentStyle = {
        display: 'flex',
        gap: '10px',
        margin: 0,
        color: 'white',
        textAlign: 'center',
        background: '#318CE7',
    };

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    const customDot = {
        backgroundColor: 'red',
    }

    return (
        <Carousel afterChange={onChange} dots={customDot}>
            {SliderData.map((slide, index) => (
                <div key={index}>
                    <h1 style={{ color: '#318CE7', textAlign: 'center' }}>Port Activities</h1>
                    <div id='container' style={contentStyle} >
                        <div>
                            <img src={slide.image} alt={slide.title} style={{ height: '250px' }} />
                        </div>
                        <div>
                            <h2 style={{ textAlign: 'left' }}>{slide.title}</h2>
                            <h4 style={{ textAlign: 'left' }}>{slide.description}</h4>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default ActivitySlider;
