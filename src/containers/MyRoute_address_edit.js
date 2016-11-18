'use strict';
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Header from '../components/Header';
import * as main from '../components/main-api';
class MyRoute_address_edit extends Component {
    constructor(props) {
        super(props);
        this.title = '服务地址';
        this.col = <Link to='/My/address' className="Bri fo-co-5">新增&nbsp;&nbsp;</Link>;
    }
    componentDidMount() {
        main.choType();
    }
    render(){
        return (
            <div>
                <Header title={this.title} col={this.col}/>
                <div className="mt-4">
                    <div className="pad1">
                        <div className="body-back-2">
                            <div className="pad1">
                                <div className="form-group1">
                                    <div className="te-cell wh-no fo-se-15 pad1 pl-0">选择服务地址</div>
                                </div>
                                <ul className="addressChoCol1 OneChoose">
                                    <li className="active">
                                        <div className="pad1 bb-1">
                                            <div className="fo-se-14 pad1 pl-0 pb-0"><span className="mr-1">姓名</span><span>纪凌尘</span></div>
                                            <div className="fo-se-14 pad1 pl-0 pb-0"><span className="mr-1">电话</span><span>15863985216</span></div>
                                            <div className="fo-se-14 pad1 pl-0 pb-0"><span className="mr-1">地址</span><span>四川省成都市成都理工大学</span></div>
                                        </div>
                                        <div className="pad1">
                                            <div className="te-cell wh-no fo-se-13 pl-0">
                                                <img src={require('../images/icon-noDe.png')} alt="" style={{height:'2rem',verticalAlign:'bottom',marginRight:'.5rem'}} className="img1"/>
                                                <img src={require('../images/icon-noDeCur.png')} alt="" style={{height:'2rem',verticalAlign:'bottom',marginRight:'.5rem'}} className="img2"/>
                                                设为默认
                                            </div>
                                            <div className="te-cell te-ri wi-1000">
                                                <img src={require('../images/icon-noupdea.png')} alt="" style={{height:'2rem',marginRight:'.5rem'}}/>
                                                <img src={require('../images/icon-noDele.png')} alt="" style={{height:'2rem'}} className="addressDel"/>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="pad1 bb-1">
                                            <div className="fo-se-14 pad1 pl-0 pb-0"><span className="mr-1">姓名</span><span>纪凌尘</span></div>
                                            <div className="fo-se-14 pad1 pl-0 pb-0"><span className="mr-1">电话</span><span>15863985216</span></div>
                                            <div className="fo-se-14 pad1 pl-0 pb-0"><span className="mr-1">地址</span><span>四川省成都市成都理工大学</span></div>
                                        </div>
                                        <div className="pad1">
                                            <div className="te-cell wh-no fo-se-13 pl-0">
                                                <img src={require('../images/icon-noDe.png')} alt="" style={{height:'2rem',verticalAlign:'bottom',marginRight:'.5rem'}} className="img1"/>
                                                <img src={require('../images/icon-noDeCur.png')} alt="" style={{height:'2rem',verticalAlign:'bottom',marginRight:'.5rem'}} className="img2"/>
                                                设为默认
                                            </div>
                                            <div className="te-cell te-ri wi-1000">
                                                <img src={require('../images/icon-noupdea.png')} alt="" style={{height:'2rem',marginRight:'.5rem'}}/>
                                                <img src={require('../images/icon-noDele.png')} alt="" style={{height:'2rem'}} className="addressDel"/>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="pad1 bb-1">
                                            <div className="fo-se-14 pad1 pl-0 pb-0"><span className="mr-1">姓名</span><span>纪凌尘</span></div>
                                            <div className="fo-se-14 pad1 pl-0 pb-0"><span className="mr-1">电话</span><span>15863985216</span></div>
                                            <div className="fo-se-14 pad1 pl-0 pb-0"><span className="mr-1">地址</span><span>四川省成都市成都理工大学</span></div>
                                        </div>
                                        <div className="pad1">
                                            <div className="te-cell wh-no fo-se-13 pl-0">
                                                <img src={require('../images/icon-noDe.png')} alt="" style={{height:'2rem',verticalAlign:'bottom',marginRight:'.5rem'}} className="img1"/>
                                                <img src={require('../images/icon-noDeCur.png')} alt="" style={{height:'2rem',verticalAlign:'bottom',marginRight:'.5rem'}} className="img2"/>
                                                设为默认
                                            </div>
                                            <div className="te-cell te-ri wi-1000">
                                                <img src={require('../images/icon-noupdea.png')} alt="" style={{height:'2rem',marginRight:'.5rem'}}/>
                                                <img src={require('../images/icon-noDele.png')} alt="" style={{height:'2rem'}} className="addressDel"/>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
export default connect(mapStateToProps)(MyRoute_address_edit);