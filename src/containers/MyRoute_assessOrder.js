'use strict';
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import $ from '../plugs/jquery';
import Header from '../components/Header';
import * as main from '../components/main-api';
class MyRoute_assessOrder extends Component {
    componentDidMount() {
        main.valCheck();
        main.choType();
        //上传图片操作
        lenFun();
        function lenFun(){
            $('.imgTitleCn').each(function(){
                var _this = $(this);
                _this.find('.loadShow').html("已上传"+_this.find('.loadIm').length+"张");
            });
        }
        $('.imgTitleCn .close').click(function(){
            var _this = $(this);
            _this.parents('.loadIm').remove();
            lenFun();
        });
    }
    handleSubmit (event){
        event.preventDefault();
        if(main.valCheck()){
            window.location.href='/My/orderSure';
        }
    }
    render(){
        return (
            <div>
                <Header title="品牌设计"/>
                <form className="pad1 mt-4 pt-1 registerform" onSubmit={this.handleSubmit}>
                    <ul className="chooseBstype2 clearfix">
                        <li className="active">
                            <p>
                                <img src={require('../images/chooseBstype2ConN1.png')} alt="" className="img1"/>
                                    <img src={require('../images/chooseBstype2Con1.png')} alt="" className="img2"/>
                            </p>
                            <p>logo设计</p>
                        </li>
                        <li>
                            <p>
                                <img src={require('../images/chooseBstype2ConN2.png')} alt="" className="img1"/>
                                    <img src={require('../images/chooseBstype2Con2.png')} alt="" className="img2"/>
                            </p>
                            <p>logo设计</p>
                        </li>
                        <li>
                            <p>
                                <img src={require('../images/chooseBstype2ConN3.png')} alt="" className="img1"/>
                                    <img src={require('../images/chooseBstype2Con3.png')} alt="" className="img2"/>
                            </p>
                            <p>logo设计</p>
                        </li>
                        <li>
                            <p>
                                <img src={require('../images/chooseBstype2ConN4.png')} alt="" className="img1"/>
                                    <img src={require('../images/chooseBstype2Con4.png')} alt="" className="img2"/>
                            </p>
                            <p>logo设计</p>
                        </li>
                        <li>
                            <p>
                                <img src={require('../images/chooseBstype2ConN5.png')} alt="" className="img1"/>
                                    <img src={require('../images/chooseBstype2Con5.png')} alt="" className="img2"/>
                            </p>
                            <p>logo设计</p>
                        </li>
                        <li>
                            <p>
                                <img src={require('../images/chooseBstype2ConN6.png')} alt="" className="img1"/>
                                    <img src={require('../images/chooseBstype2Con6.png')} alt="" className="img2"/>
                            </p>
                            <p>logo设计</p>
                        </li>
                    </ul>
                    <div className="pad-1 pb-0">
                        <div className="body-back-2">
                            <div className="pad1">
                                <div className="pt-2">
                                    <div className="h3Col">说明</div>
                                    <textarea name="" id="" cols="30" rows="10" className="form-control pt-2 mt-2" placeholder="与设计公司打交道说明" datatype="n" data-nullmsg="请输入与设计公司打交道说明"></textarea>
                                </div>
                                <div className="pt-2">
                                    <div className="h3Col">添加服务内容</div>
                                    <textarea name="" id="" cols="30" rows="10" className="form-control pt-2 mt-2" placeholder="请输入服务内容，如网页设计" datatype="n" data-nullmsg="请输入服务内容"></textarea>
                                </div>
                                <div className="imgTitle mt-1">
                                    <p><img src={require('../images/icon-pc1.png')} alt="" style={{width: "2rem"}}/></p>
                                    <p>点击上传图片</p>
                                </div>
                                <div className="imgTitleCn">
                                    <div className="loadIm">
                                        <img src={require('../images/imgTitleCnc.png')} alt="" height="100%"/>
                                            <div className="close"></div>
                                    </div>
                                    <div className="loadIm">
                                        <img src={require('../images/imgTitleCnc.png')} alt="" height="100%"/>
                                            <div className="close"></div>
                                    </div>
                                    <div className="loadIm">
                                        <img src={require('../images/imgTitleCnc.png')} alt="" height="100%"/>
                                            <div className="close"></div>
                                    </div>
                                    <div className="loadShow">已上传7张</div>
                                </div>
                                <a href="javascript:void (0)" className="form-btn body-back-6">提交添加</a>
                            </div>
                        </div>
                    </div>
                    <div className="body-back-2">
                        <div className="mt-1">
                            <div className="pad1">
                                <input type="submit" className="form-btn body-back-6" value="下一步"/>
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
export default connect(mapStateToProps)(MyRoute_assessOrder);