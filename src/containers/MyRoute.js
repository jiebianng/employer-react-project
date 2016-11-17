'use strict';
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as userApi from '../api/user-api';
class MyRoute extends Component {
    componentDidMount() {
        userApi.getUsers();
    }
    render(){
        return (
            <div>
                <Header title="我"/>
                {this.props.users.map((repo,i) => {
                    return (
                        <div key = {i}>
                            <div className="pad1 mt-4 pb-0">
                                <div className="body-back-2">
                                    <div className="pad1">
                                        <Link to='/My/message'>
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
                            <div className="pad1 pb-0">
                                <div className="body-back-2">
                                    <div className="pad1">
                                        <div className="h3Col mt-1">全部订单</div>
                                        <ul className="chooseBstype4 clearfix mt-1">
                                            <li>
                                                <Link to='/My/order?PTopage=0'>
                                                    <div className="form-btnAu">{repo.carry}</div>
                                                    <p className="mt-1">进行中订单</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/My/order?PTopage=1'>
                                                    <div className="form-btnAu">{repo.beEvaluated}</div>
                                                    <p className="mt-1">待评价订单</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/My/order?PTopage=2'>
                                                    <div className="form-btnAu">{repo.all}</div>
                                                    <p className="mt-1">全部订单</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className="pad1 pb-5">
                    <div className="body-back-2">
                        <div className="pad1 pb-5">
                            <div className="form-group1">
                                <Link to='/My/address'>
                                    <div className="te-cell wh-no fo-se-13 pad1 pl-0">我的地址</div>
                                    <div className="te-cell te-ri wi-1000 pad1">
                                        <p><img src={require('../images/icon-rigin.png')} alt="" height="16"/></p>
                                    </div>
                                </Link>
                            </div>
                            <div className="form-group1">
                                <Link to='/My/address'>
                                    <div className="te-cell wh-no fo-se-13 pad1 pl-0">认证</div>
                                    <div className="te-cell wi-1000 te-ri fo-se-13 pad1 pl-0 fo-co-2">雇主可忽略</div>
                                    <div className="te-cell pad1">
                                        <p><img src={require('../images/icon-rigin.png')} alt="" height="16"/></p>
                                    </div>
                                </Link>
                            </div>
                            <div className="form-group1">
                                <Link to='/My/address'>
                                    <div className="te-cell wh-no fo-se-13 pad1 pl-0">我的微社区</div>
                                    <div className="te-cell te-ri wi-1000 pad1">
                                        <p><img src={require('../images/icon-rigin.png')} alt="" height="16"/></p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
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
export default connect(mapStateToProps)(MyRoute);