'use strict';
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
class SupplyRoute_grab extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    componentDidUpdate() {

    }
    render(){
        return (
            <div>
                <Header title="订单详情"/>
                <div className="pad1 mt-4 pb-0">
                    <div className="body-back-2">
                        <div className="pad1">
                            <div className="te-cell wh-no fo-se-13 pad1 pl-0 ve-mi">
                                <p><img src={require('../images/orderheadImg.jpg')} alt=""  style={{height:'5rem'}}/></p>
                            </div>
                            <div className="te-cell fo-se-13 pad1 pl-0 wi-1000 ve-mi">
                                <p className="fo-se-14">黛芙妮蜜拉贝儿</p>
                                <p className="mt-1 fo-co-2">
                                    <img src={require('../images/icon-prive1.png')} alt=""  style={{height:'2rem',verticalAlign:'bottom',marginRight:'.5rem'}} className="img2"/>
                                        普通用户
                                </p>
                            </div>
                            <div className="te-cell wh-no te-ri pad1 ve-mi">
                                <p><img src={require('../images/icon-callPhone.png')} alt=""  style={{height:'3.2rem'}}/></p>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="registerform" action="/My/order?PTopage=0">
                    <div className="pad1 pb-0">
                        <div className="body-back-2">
                            <div className="pad1">
                                <div className="h3Col mt-1">需求说明</div>
                                <textarea name="" id="" cols="30" rows="10" className="form-control pt-2 mt-2" placeholder="请输入具体说明" disabled="disabled"></textarea>
                                <p className="mt-1 fo-se-14">赏金  <span className="fo-co-6">200 元（目前仅支持电话议价）</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="pad1 pb-0">
                        <div className="body-back-2">
                            <div className="pad1">
                                <div className="h3Col mt-1">需求说明</div>
                                <p className="fo-se-14 fo-co-2 mt-1 pb-1 bb-1">四川省成都市成都理工大学 </p>
                                <div className="h3Col mt-1">时间</div>
                                <p className="fo-se-14 fo-co-2 mt-1 pb-1 bb-1">14:00--16:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="pad1 pb-0">
                        <div className="body-back-2">
                            <div className="pad1 pb-0">
                                <div className="h3Col mt-1">详细说明</div>
                                <p className="fo-se-14 fo-co-2 mt-1 pb-1 bb-1">问题详细说明，如果有图片描述的话，会显示图片信息</p>
                                <ul className="chooseBstype3 clearfix mt-1">
                                    <li>
                                        <img src={require('../images/orderheadImg.jpg')} alt="" width="100%"/>
                                    </li>
                                    <li>
                                        <img src={require('../images/orderheadImg.jpg')} alt="" width="100%"/>
                                    </li>
                                    <li>
                                        <img src={require('../images/orderheadImg.jpg')} alt="" width="100%"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pad1">
                        <div className="body-back-2">
                            <div className="pad1">
                                <input type="submit" className="form-btn" value="抢单"/>
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
        Supply_data: store.otherState.Supply_data
    };
};
export default connect(mapStateToProps)(SupplyRoute_grab);