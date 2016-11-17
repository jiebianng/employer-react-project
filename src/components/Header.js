'use strict';
import React from 'react';
import $ from '../plugs/jquery';
class Header extends React.Component {
  render() {
      $('head title').html(this.props.title);
     return (
        <div className="tjAllHead">
           <div className="clearfix">
              <a href="javascript:history.go(-1)" className="fl fo-se-13 mt-1 fo-co-3 z-index-100">&nbsp;&nbsp;<img src={require('../images/icon-goin2.png')} style={{width: '1rem',verticalAlign: 'bottom'}} alt=""/></a>
              <div className="title">{this.props.title}</div>
               {this.props.col}
           </div>
        </div>
     );
  }
}
export default Header;
