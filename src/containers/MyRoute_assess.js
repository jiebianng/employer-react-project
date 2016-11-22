'use strict';
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import * as main from '../components/main-api';
class MyRoute_assess extends Component {
    componentDidMount() {
        main.valCheck();
        main.choType();
    }
    render(){
        return (
            <div>
                <Header title="服务评价"/>
                <form className="registerform">
                    <div className="pad1 mt-4 pb-0">
                        <div className="body-back-2">
                            <div className="pad1 pb-0">
                                <a href="page28.html">
                                    <div className="te-cell wh-no fo-se-13 pad1 pl-0 ve-mi">
                                        <p><img src={require('../images/orderheadImg.jpg')} alt="" style={{width:'5rem'}}/></p>
                                    </div>
                                    <div className="te-cell fo-se-13 pad1 pl-0 wi-1000 ve-mi">
                                        <p className="fo-se-14">黛芙妮蜜拉贝儿</p>
                                    </div>
                                    <div className="te-cell wh-no te-ri pad1 ve-mi">
                                        <p><img src={require('../images/icon-rigin.png')} alt="" height="20"/></p>
                                    </div>
                                </a>
                            </div>
                            <div className="pad1">
                                <div className="form-group1">
                                    <div className="te-cell wh-no fo-se-13 pad1 pl-0">服务态度</div>
                                    <div className="te-cell wi-1000 te-le pad1 pl-0">
                                        <ul className="StarControl StarColClick">
                                            <li className="active"></li>
                                            <li className="active"></li>
                                            <li className="active"></li>
                                            <li className="active"></li>
                                            <li className="active"></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="form-group1">
                                    <div className="te-cell wh-no fo-se-13 pad1 pl-0">服务态度</div>
                                    <div className="te-cell wi-1000 te-le pad1 pl-0">
                                        <ul className="StarControl StarColClick">
                                            <li className="active"></li>
                                            <li className="active"></li>
                                            <li className="active"></li>
                                            <li className="active"></li>
                                            <li className="active"></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="form-group1">
                                    <div className="te-cell wh-no fo-se-13 pad1 pl-0">服务态度</div>
                                    <div className="te-cell wi-1000 te-le pad1 pl-0">
                                        <ul className="StarControl StarColClick">
                                            <li className="active"></li>
                                            <li className="active"></li>
                                            <li className="active"></li>
                                            <li className="active"></li>
                                            <li className="active"></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="h3Col mt-1 fo-se-14">服务技能点评</div>
                                <div className="form-group1">
                                    <div className="te-cell wh-no fo-se-13 pad1 pl-0">子类1</div>
                                    <div className="te-cell wi-1000 te-le pad1 pl-0">
                                        <ul className="StarControl StarColClick">
                                            <li className="active"></li>
                                            <li className="active"></li>
                                            <li className="active"></li>
                                            <li className="active"></li>
                                            <li className="active"></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="form-group1">
                                    <div className="te-cell wh-no fo-se-13 pad1 pl-0">子类1</div>
                                    <div className="te-cell wi-1000 te-le pad1 pl-0">
                                        <ul className="StarControl StarColClick">
                                            <li className="active"></li>
                                            <li className="active"></li>
                                            <li className="active"></li>
                                            <li className="active"></li>
                                            <li className="active"></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pad1 pb-0">
                        <div className="body-back-2">
                            <div className="pad1">
                                <div className="h3Col mt-1">其它评价</div>
                                <textarea name="" id="" cols="30" rows="10" className="form-control pt-2 mt-2" placeholder="填写其他评价" datatype="n" data-nullmsg="填写其他评价"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="body-back-2">
                        <div className="mt-1">
                            <div className="pad2">
                                <input type="submit" className="form-btn body-back-6" value="提交"/>
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
export default connect(mapStateToProps)(MyRoute_assess);