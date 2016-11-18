'use strict';
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import * as main from '../components/main-api';
class MyRoute_password extends Component {
    componentDidMount() {
        main.valCheck();
    }
    render(){
        return (
            <div>
                <Header title="重置密码"/>
                <div className="pad1 mt-4">
                    <div className="body-back-2">
                        <form className="pad2 pt-5 pb-5 registerform">
                            <div className="clearfix">
                                <div className="wi-70 fl">
                                    <div className="wi-95">
                                        <input type="text" className="form-control wi-93 pl-7" placeholder="请输入电话号码" datatype="m" data-errormsg="电话号码输入错误" data-nullmsg="请输入电话号码"/>
                                    </div>
                                </div>
                                <div className="wi-30 fl">
                                    <a href="javascript:void (0)" className="form-btnMi sendCodeCol">验证</a>
                                </div>
                            </div>
                            <input type="text" className="form-control mt-2" placeholder="请输入验证码" datatype="nl" data-errormsg="注意输入1-30个字符" data-nullmsg="请输入验证码"/>
                            <input type="password" className="form-control mt-2" placeholder="请输入新密码" datatype="nl" name="userpassword" data-errormsg="注意输入1-30个字符" data-nullmsg="请输入新密码"/>
                            <input type="password" className="form-control mt-2" placeholder="确认新密码" datatype="nl" data-recheck="userpassword" data-errormsg="您两次输入的账号密码不一致！" data-nullmsg="确认新密码"/>
                            <input type="submit" className="form-btn mt-2 body-back-6" value="完成"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = function(store) {
    return {
        users: store.userState.users
    };
};
export default connect(mapStateToProps)(MyRoute_password);