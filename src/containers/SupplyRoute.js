'use strict';
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as otherApi from '../api/other-api';
let query = {};
class SupplyRoute extends Component {
    constructor(props) {
        super(props);
        this.handleRangeClick = this.handleRangeClick.bind(this);
        this.handleStyleClick = this.handleStyleClick.bind(this);
    }
    componentDidMount() {
        otherApi.getSupply();
    }
    handleRangeClick(event){
        event.preventDefault();
        let val = event.target.options[event.target.selectedIndex].value;
        if(val=='全部'){
            delete query.typerange;
        }else {
            query.typerange = val;
        }
        otherApi.getSupplyQuery(query);
    }
    handleStyleClick(event){
        event.preventDefault();
        let val = event.target.options[event.target.selectedIndex].value;
        if(val=='全部'){
            delete query.typestyle;
        }else {
            query.typestyle = val;
        }
        otherApi.getSupplyQuery(query);
    }
    render(){
        let dataEach = this.props.Supply_data;
        if(dataEach.length!=0){
            return (
                <div>
                    <Header title="需求"/>
                    <div className="mt-4 pb-5">
                        <div className="pad1 pb-0">
                            <div className="body-back-2">
                                <div className="pad1">
                                    <div className="te-cell wh-no">
                                        <span className="mr-2 fo-se-12">区域</span>
                                    </div>
                                    <div className="te-cell wh-no wi-1000">
                                        <select name="" id="" className="form-control1 fo-co-2 br-1"  onChange={this.handleRangeClick}>
                                            <option value="全部">全部</option>
                                            {this.props.Supply_data.supplytyperange.map((repo,i) => {
                                                return (
                                                    <option key={i} value={repo.typerange}>{repo.typerange}</option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <div className="te-cell wh-no">
                                        <span className="mr-2 ml-1 fo-se-12">类型</span>
                                    </div>
                                    <div className="te-cell wh-no wi-1000">
                                        <select name="" id="" className="form-control1 fo-co-2"  onChange={this.handleStyleClick}>
                                            <option value="全部">全部</option>
                                            {this.props.Supply_data.supplytypestyle.map((repo,i) => {
                                                return (
                                                    <option key={i} value={repo.typestyle}>{repo.typestyle}</option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {this.props.Supply_data.list.map((repo,i) => {
                            return (
                                <div className="pad1 pb-0" key = {i}>
                                    <div className="body-back-2">
                                        <div className="pad1 bb-1">
                                            <textarea name="" id="" cols="30" rows="10" className="form-control wi-60 ve-mi" placeholder="请输入需求说明" disabled="disabled" value={repo.info}></textarea>
                                            <Link to='Supply/grad' className="form-btnMi wi-30">抢单</Link>
                                        </div>
                                        <div className="pad1 pb-0">
                                            <p><img src={require('../images/icon-ncvtime.png')} alt="" style={{height: '2rem',verticalAlign: 'bottom',marginRight: '.5rem'}} className="img2"/>{repo.time}</p>
                                        </div>
                                        <div className="pad1 bb-1 pb-0 pt-0">
                                            <div className="te-cell wh-no fo-se-13 pad1 pl-0 ve-mi">
                                                <p><img src={repo.imgurl} alt="" style={{width:'5rem'}}/></p>
                                            </div>
                                            <div className="te-cell fo-se-13 pad1 pl-0 wi-1000 ve-mi">
                                                <p className="fo-se-14">{repo.name} <img src={require('../images/icon-ng1.png')} alt="" style={{height: '1.5rem',verticalAlign: 'bottom',marginRight: '.5rem'}} className="img2"/></p>
                                                <p className="mt-1">
                                                    <img src={require('../images/icon-ng3.png')} alt=""  style={{height: '1.2rem',verticalAlign: 'bottom',marginRight: '.5rem'}} className="img2"/>
                                                    <span className="fo-se-14 ">{repo.startaddress}</span>
                                                    <span className="fo-se-12 fo-co-2">{repo.startrange}</span>
                                                </p>
                                                <p className="mt-1 fo-co-2">
                                                    <img src={require('../images/icon-ng4.png')} alt="" style={{height: '1.2rem',verticalAlign: 'bottom',marginRight: '.5rem'}} className="img2"/>
                                                    <span className="fo-se-14 ">{repo.endaddress}</span>
                                                    <span className="fo-se-12 fo-co-2">{repo.endrange}</span>
                                                </p>
                                            </div>
                                            <div className="te-cell wh-no te-ri pad1 ve-mi">
                                                <p><a href="page22.html"><img src={require('../images/icon-rigin.png')} alt="" height="20"/></a></p>
                                            </div>
                                        </div>
                                        <div className="pad1 te-ri fo-se-14"><span>赏金</span><span className="fo-co-1">￥{repo.money}</span></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <Footer/>
                </div>
            );
        }else {
            return (
                <div></div>
            );
        }
    }
}
const mapStateToProps = function(store) {
    return {
        Supply_data: store.otherState.Supply_data
    };
};
export default connect(mapStateToProps)(SupplyRoute);