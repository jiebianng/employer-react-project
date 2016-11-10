'use strict';
import '../plugs/swiper-3.4.0.min';
import React from 'react';
class Swiper extends React.Component {
    render() {
        let renderData = [],eachData = this.props.data;
        eachData.forEach((value,index) => {
            renderData.push(<div className="swiper-slide" key={index}><a href={value.a_link}><img src={value.imgSrc} alt="" width="100%"/></a></div>);
        });
        return (
             <div className="swiper-container">
                 <div className="swiper-wrapper">
                     {renderData}
                 </div>
                 <div className="swiper-pagination"></div>
             </div>
        );
    }
}
export default Swiper;
