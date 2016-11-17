'use strict';
import React,{ Component } from 'react';
class childRoute extends Component {
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
export default childRoute;
