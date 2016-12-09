'use strict';
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Header from '../components/Header';
import * as main from '../components/main-api';
class MyRoute_orderSure extends Component {
    componentDidMount() {
        main.valCheck();
        main.choType();
        main.choTimePop();
    }
    handleSubmit (event){
        event.preventDefault();
        if(main.valCheck()){
            window.location.href='/My/order?PTopage=0';
        }
    }
    render(){
        return (
            <div>
                <Header title="确认订单"/>
                <form className="mt-4 registerform" onSubmit={this.handleSubmit}>
                    <div className="pad1">
                        <div className="body-back-2">
                            <div className="pad-2">
                                <div className="form-group1">
                                    <div className="h3Col mb-1">服务项目</div>
                                </div>
                                <div className="form-group1">
                                    <Link to='/My/assessOrder'>
                                        <div className="te-cell fo-se-13 wi-1000 pad1 pl-0">
                                            <ul className="bnChoDesign">
                                                <li>LOGO设计</li>
                                                <li>画册设计</li>
                                            </ul>
                                        </div>
                                        <div className="te-cell te-ri pad1">
                                            <img src={require('../images/icon-rigin.png')} alt="" height="16"/>
                                        </div>
                                    </Link>
                                </div>
                                <div className="form-group1">
                                    <div className="te-cell wh-no fo-se-13 pad1 pl-0">优惠券</div>
                                    <div className="te-cell te-ri wi-1000 pad1">
                                        <img src={require('../images/icon-rigin.png')} alt="" height="16"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pad1 pb-0">
                        <div className="body-back-2">
                            <div className="pad-2">
                                <div className="form-group1">
                                    <div className="h3Col mb-1">个人信息</div>
                                </div>
                                <div className="form-group1">
                                    <ul className="chooseCodeLei clearfix">
                                        <li className="active">
                                            <img src={require('../images/chooseCodeLei3.png')} alt="" style={{width: "2rem"}}/>
                                                <span className="ml-1">为自己下单</span>
                                        </li>
                                        <li>
                                            <img src={require('../images/chooseCodeLei4.png')} alt="" style={{width: "2rem"}}/>
                                                <span className="ml-1">为他人下单</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="form-group1">
                                    <div className="te-cell wh-no fo-se-13 pad1 pl-0">请选择城市</div>
                                    <div className="te-cell te-ri wi-1000 pad1">
                                        <img src={require('../images/icon-rigin.png')} alt="" height="16"/>
                                    </div>
                                </div>
                                <div className="form-group1">
                                    <div className="te-cell wh-no fo-se-13 pad1 pl-0">请选择区县</div>
                                    <div className="te-cell te-ri wi-1000 pad1">
                                        <img src={require('../images/icon-rigin.png')} alt="" height="16"/>
                                    </div>
                                </div>
                                <div className="form-group1">
                                    <div className="te-cell wh-no fo-se-13 pad1 pl-0">请点击输入详细地址</div>
                                    <div className="te-cell te-ri wi-1000 pad1">
                                        <input type="text" className="form-control1" datatype="address" data-errormsg="详细地址为2-100个字符" data-nullmsg="请输入详细地址"/>
                                    </div>
                                </div>
                                <div className="form-group1">
                                    <div className="te-cell wh-no fo-se-13 pad1 pl-0">请点击输入姓名</div>
                                    <div className="te-cell te-ri wi-1000 pad1">
                                        <input type="text" className="form-control1" datatype="nl" data-errormsg="姓名为1-30个字符" data-nullmsg="请输入姓名"/>
                                    </div>
                                </div>
                                <div className="clearfix mt-1">
                                    <div className="wi-70 fl">
                                        <div className="wi-95">
                                            <input type="text" className="form-control wi-93 pl-7" placeholder="请输入电话号码" datatype="m" data-nullmsg="请输入电话号码"/>
                                        </div>
                                    </div>
                                    <div className="wi-30 fl">
                                        <a href="javascript:void (0)" className="form-btnMi sendCodeCol">验证</a>
                                    </div>
                                </div>
                                <input type="text" className="form-control mt-1" placeholder="请输入验证码" datatype="nl" data-nullmsg="请输入验证码"/>
                                    <div className="te-ce">
                                        <input type="submit" className="form-btn body-back-6 mt-1 wi-60" value="保存个人信息"/>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="pad1 pb-0">
                        <div className="body-back-2">
                            <div className="pad-2">
                                <div className="form-group1">
                                    <div className="h3Col mb-1">服务时间</div>
                                </div>
                                <div className="form-group1 popupTimeOpen">
                                    <div className="te-cell wh-no fo-se-13 pad1 pl-0">请选择服务时间</div>
                                    <div className="te-cell te-ri wi-1000 pad1">
                                        <img src={require('../images/icon-rigin.png')} alt="" height="16"/>
                                    </div>
                                </div>
                                <textarea name="" id="" cols="30" rows="10" className="form-control pt-2 mt-1" placeholder="请输入留言内容"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="pad1">
                        <div className="body-back-2">
                            <div className="pad-2">
                                <input type="text" id="bnChoDesShow" className="form-control" value=""/>
                            </div>
                            <div className="mt-1">
                                <div className="pad1">
                                    <input type="submit" className="form-btn body-back-6" value="提交订单"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = function(store) {
    return {
        users: store.userState.users
    };
};
export default connect(mapStateToProps)(MyRoute_orderSure);