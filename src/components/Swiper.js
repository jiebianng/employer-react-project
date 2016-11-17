'use strict';
import React from 'react';
require('../styles/swiper-3.2.7.min.css');
// Using "Stateless Functional Components"
export default function(props) {
    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                {props.swi_data.map((repo,i) => {
                    return (
                        <div className="swiper-slide" key={i}><a href={repo.a_link} target="_target"><img src={repo.imgSrc} alt="" width="100%"/></a></div>
                    );
                })}
            </div>
            <div className="swiper-pagination"></div>
        </div>
    );
}