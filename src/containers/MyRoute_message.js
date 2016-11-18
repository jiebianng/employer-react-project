'use strict';
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as userApi from '../api/user-api';
const iconRigin = require('../images/icon-rigin.png');
class MyRoute_message extends Component {
    componentDidMount() {
        userApi.getUsers();
    }
    render(){
        return (
            <div>
                <Header title="个人信息"/>
                    {this.props.users.map((repo,i) => {
                        return (
                            <div key = {i}>
                                <div className="pad1 mt-4 pb-0">
                                    <div className="body-back-2">
                                        <div className="pad1">
                                            <Link to='/My/message_info'>
                                                <div className="te-cell wh-no fo-se-13 pad1 pl-0 ve-mi">
                                                    <p><img src={repo.imgurl} alt="" style={{width:'5rem'}}/></p>
                                                </div>
                                                <div className="te-cell fo-se-13 pad1 pl-0 wi-1000 ve-mi">
                                                    <p className="fo-se-14">{repo.name}</p>
                                                    <p className="mt-1 fo-co-2">
                                                        <img src={require('../images/icon-phone1.png')} alt="" style={{height: '2rem',verticalAlign: 'bottom',marginRight: '.5rem'}} className="img2"/>{repo.phone}
                                                    </p>
                                                </div>
                                                <div className="te-cell wh-no te-ri pad1 ve-mi">
                                                    <p><img src={require('../images/icon-rigin.png')} alt="" height="20"/></p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="pad1 pb-5">
                                    <div className="body-back-2">
                                        <div className="pad1 pb-5">
                                            <div className="form-group1">
                                                <Link to='/My/address'>
                                                    <div className="te-cell wh-no fo-se-13 pad1 pl-0">昵称</div>
                                                    <div className="te-cell wi-1000 te-le fo-se-13 pad1 pl-0 fo-co-2">{repo.nickname}</div>
                                                    <div className="te-cell pad1">
                                                        <p><img src={iconRigin} alt="" height="16"/></p>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="form-group1">
                                                <a href="javascript:void (0)">
                                                    <div className="te-cell wh-no fo-se-13 pad1 pl-0">认证</div>
                                                    <div className="te-cell wi-1000 te-le fo-se-13 pad1 pl-0 fo-co-2">{repo.phone}</div>
                                                    <div className="te-cell pad1">
                                                        <p><img src={iconRigin} alt="" height="16"/></p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="form-group1">
                                                <a href="javascript:void (0)">
                                                    <div className="te-cell wh-no fo-se-13 pad1 pl-0">性别</div>
                                                    <div className="te-cell wi-1000 te-le fo-se-13 pad1 pl-0 fo-co-2">请填写</div>
                                                    <div className="te-cell pad1">
                                                        <p><img src={iconRigin} alt="" height="16"/></p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="form-group1">
                                                <Link to='/My/password'>
                                                    <div className="te-cell wh-no fo-se-13 pad1 pl-0">密码</div>
                                                    <div className="te-cell wi-1000 te-le fo-se-13 pad1 pl-0 fo-co-2">修改</div>
                                                    <div className="te-cell pad1">
                                                        <p><img src={iconRigin} alt="" height="16"/></p>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="form-group1">
                                                <a href="javascript:void (0)">
                                                    <div className="te-cell wh-no fo-se-13 pad1 pl-0">我的签名</div>
                                                    <div className="te-cell wi-1000 te-le fo-se-13 pad1 pl-0 fo-co-2">请填写</div>
                                                    <div className="te-cell pad1">
                                                        <p><img src={iconRigin} alt="" height="16"/></p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="form-group1">
                                                <a href="javascript:void (0)">
                                                    <div className="te-cell wh-no fo-se-13 pad1 pl-0">我的等级</div>
                                                    <div className="te-cell wi-1000 te-le fo-se-13 pad1 pl-0 fo-co-2"></div>
                                                    <div className="te-cell pad1">
                                                        <p><img src={iconRigin} alt="" height="16"/></p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                <Footer/>
            </div>
        );
    }
}
const mapStateToProps = function(store) {
    return {
        users: store.userState.users
    };
};
export default connect(mapStateToProps)(MyRoute_message);