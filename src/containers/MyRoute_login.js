'use strict';
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Header from '../components/Header';
import * as main from '../components/main-api';
import * as userApi from '../api/user-api';
class MyRoute_login extends Component {
    constructor(props) {
        super(props);
        this.title = '登录';
        this.col = <Link to='/My/register' className="Bri">注册&nbsp;&nbsp;</Link>;
    }
    componentDidMount() {
        main.valCheck();
    }
    handleSubmit (event){
        event.preventDefault();
        const phone = event.target.elements[0].value;
        const password = event.target.elements[1].value;
        const path = {
            phone:phone,
            password:password
        };
        if(main.valCheck()){
            userApi.getLogin(path);
        }
    }
    render(){
        return (
            <div>
                <Header title={this.title} col={this.col}/>
                <div className="pad1 mt-4">
                    <div className="body-back-2">
                        <form className="pad2 pt-5 pb-5 registerform" onSubmit={this.handleSubmit}>
                            <input type="text" className="form-control" placeholder="请输入电话号码" datatype="m" data-errormsg="电话号码输入错误" data-nullmsg="请输入电话号码"/>
                            <input type="text" className="form-control mt-2 Validform_error" placeholder="请输入密码" datatype="nl" data-errormsg="注意输入1-30个字符" data-nullmsg="请输入密码"/>
                            <input type="submit" className="form-btn mt-2 body-back-6" value="登录"/>
                            <div className="clearfix mt-2">
                                <a href="javascript:void (0)" className="fl fo-se-14">忘记密码</a>
                                <a href="javascript:void (0)" className="fr fo-se-14">短信验证码登录</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = function(store) {
    return {
        states: store.userState.states
    };
};
export default connect(mapStateToProps)(MyRoute_login);