'use strict';
import React,{ Component } from 'react';
import Header from '../components/Header';
class MyRoute_register extends Component {
    constructor(props) {
        super(props);
        this.title = '选择注册用户类型';
    }
    render(){
        return (
            <div>
                <Header title={this.title}/>
                <div className="pad1 mt-4">
                    <div className="body-back-2">
                        <div className="pad2 pt-3">
                            <div className="h3Col">注册为雇主</div>
                            <div className="pad1 mt-1">
                                <a href="javascript:void (0)" className="form-btn body-back-4">点击   注册为雇主</a>
                                <textarea name="" id="" cols="30" rows="10" className="form-control pt-2 mt-2" placeholder="注册为雇主" disabled="disabled"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="body-back-2 mt-2">
                        <div className="pad2 pt-3">
                            <div className="h3Col">注册为服务者</div>
                            <div className="pad1 mt-1">
                                <a href="javascript:void (0)" className="form-btn body-back-4">点击   注册为个人服务者</a>
                                <textarea name="" id="" cols="30" rows="10" className="form-control pt-2 mt-2" placeholder="注册为个人服务者" disabled="disabled"></textarea>
                            </div>
                            <div className="pad1">
                                <a href="javascript:void (0)" className="form-btn body-back-4">点击   注册为企业服务者</a>
                                <textarea name="" id="" cols="30" rows="10" className="form-control pt-2 mt-2" placeholder="注册为企业服务者" disabled="disabled"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default MyRoute_register;