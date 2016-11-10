'use strict';
import React from 'react';
class Header extends React.Component {
  render() {
     return (
        <div className="tjAllHead">
           <div className="clearfix">
              <a href="javascript:history.go(-1)" className="fl fo-se-13 mt-1 fo-co-3 z-index-100">&nbsp;&nbsp;<img src={require('../images/icon-goin2.png')} style={{width: '1rem',verticalAlign: 'bottom'}} alt=""/></a>
              <div className="title">{this.props.title}</div>
              <a href="javascript:void (0)" className="Bri">{this.props.col}</a>
           </div>
        </div>
     );
  }
}
export default Header;
