'use strict';
import React from 'react';
import { Link } from 'react-router';
// Using "Stateless Functional Components"
export default function(props) {
    if(props.orders.length!=0){
        return (
            <div className="pad1 mt-4 mb-5">
                <div className="body-back-2">
                    <div className="tj_all_swiperContainer">
                        <ul className="tj_all_pagination">
                        </ul>
                        <div className="swiper-wrapper body-back-2 clearfix">
                            <div className="swiper-slide">
                                <div className="pad1">
                                    <ul className="orderCoLiTel">
                                        {props.orders.newList.map((repo,i) => {
                                            return (
                                                <li className="mb-2" key = {i}>
                                                    <div className="orderCoLi clearfix">
                                                        <div className="le active">
                                                            订单详情
                                                        </div>
                                                        <div className="ri">
                                                            等待抢单..
                                                        </div>
                                                    </div>
                                                    <div className="form-group1">
                                                        <Link to='/Supply/grad'>
                                                            <div className="te-cell wh-no fo-se-13 pad1 pl-0">
                                                                <p>时间   {repo.time}</p>
                                                                <p>地点   {repo.address}</p>
                                                                <p>赏金   {repo.money}</p>
                                                            </div>
                                                            <div className="te-cell te-ri wi-1000 pad1">
                                                                <img src={require('../images/icon-rigin.png')} alt="" height="16"/>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="form-group1 mt-1 clearfix pb-1">
                                                        <a href="javascript:void (0)" className="form-btnMi wi-40 fr addressDel">取消订单</a>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="pad1">
                                    <ul className="orderCoLiTel">
                                        {props.orders.assessList.map((repo,i) => {
                                            return (
                                                <li className="mb-2" key={i}>
                                                    <div className="form-group1 bt-1">
                                                        <Link to='/Supply/grad'>
                                                            <div className="te-cell wh-no fo-se-13 pad1 pl-0">
                                                                <p>{repo.shopName}</p>
                                                            </div>
                                                            <div className="te-cell te-ri wi-1000 pad1">
                                                                <img src={require('../images/icon-rigin.png')} alt="" height="16"/>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="form-group1">
                                                        <Link to='/Supply/grad'>
                                                            <div className="te-cell wh-no fo-se-13 pad1 pl-0">
                                                                <p><img src={repo.imgUrl} alt="" style={{width:'5rem'}}/></p>
                                                            </div>
                                                            <div className="te-cell fo-se-13 pad1 pl-0 wi-1000">
                                                                <p>{repo.shopName}</p>
                                                            </div>
                                                            <div className="te-cell wh-no te-ri pad1">
                                                                <span className="fo-co-6">￥{repo.money}</span>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="form-group1">
                                                        <div className="pad1 te-ri"><span>共一项服务，合计</span><span className="fo-co-1">￥{repo.allmoney}</span></div>
                                                    </div>
                                                    <div className="clearfix">
                                                        <Link to='/My/assess' className="form-btnMi wi-30 fr mt-1 ml-1">评价</Link>
                                                        <a href="javascript:void (0)" className="form-btnMi wi-30 fr mt-1 addressDel">删除订单</a>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                {props.orders.allList.map((repo,i) => {
                                    return (
                                        <div className="pad1" key={i}>
                                            <ul className="orderCoLiTel">
                                                <li>
                                                    <div className="form-group1 bt-1">
                                                        <Link to='/Supply/grad'>
                                                            <div className="te-cell wh-no fo-se-13 pad1 pl-0">
                                                                <p>{repo.shopName}</p>
                                                            </div>
                                                            <div className="te-cell te-ri wi-1000 pad1">
                                                                <img src={require('../images/icon-rigin.png')} alt="" height="16"/>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="form-group1">
                                                        <Link to='/Supply/grad'>
                                                            <div className="te-cell wh-no fo-se-13 pad1 pl-0">
                                                                <p><img src={repo.imgUrl} alt="" style={{width:'5rem'}}/></p>
                                                            </div>
                                                            <div className="te-cell fo-se-13 pad1 pl-0 wi-1000">
                                                                <p>{repo.info}</p>
                                                            </div>
                                                            <div className="te-cell wh-no te-ri pad1">
                                                                <span className="fo-co-6">￥{repo.money}</span>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="form-group1">
                                                        <div className="pad1 te-ri"><span>共一项服务，合计</span><span className="fo-co-1">￥{repo.allmoney}</span></div>
                                                    </div>
                                                    <div className="clearfix">
                                                        <Link to='/My/assess' className="form-btnMi wi-30 fr mt-1 ml-1">评价</Link>
                                                        <a href="javascript:void (0)" className="form-btnMi wi-30 fr mt-1 addressDel">删除订单</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }else {
        return(
            <div></div>
        )
    }
}