
import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './ImageSlider.css';
import { Card } from "antd";

const ImageSlide = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (

        <div className='slider'>
            <div><h1 style={{ color: '#318CE7', textAlign: 'center',fontSize: '30px' ,marginTop:0 }}>Port Activities</h1></div>
            {/* <h1 style={{ color: '#318CE7' }}>Port Activities</h1> */}
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} style={{ zIndex: 1 }} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} style={{ zIndex: 1 }} />
            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <div className='slide-content'>
                                <img src={slide.image} alt='travel image' className='image' />
                                <div style={{}} className='image-description'>    
                                <div style={{ textAlign: 'left', alignItems: 'center', display: 'flex', gap: '10px', padding: '10px' }}>
                                    <h2 style={{  color: '#318CE7' }}>{slide.title}</h2>
                                    <p className='activity-date' style={{ textAlign: 'right', color: '#318CE7' }}>{slide.date}</p>
                                </div>
                                    <p style={{ color: '#318CE7',fontSize: '16px',fontFamily: 'Open Sans'}} className='slide-description'>{slide.description}</p></div>


                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default ImageSlide;