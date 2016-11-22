'use strict';
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as state from '../state/state-types';
import Swipers from '../components/Swiper';
import * as otherApi from '../api/other-api';
import * as main from '../components/main-api';
class IndexRoute extends Component {
    constructor(props) {
        super(props);
        state.getUserState('/');
        this.title = '欢迎光临';
        this.col = <a href="javascript:void (0)" className="Bri"><img src={require('../images/icon-dingwei.png')} style={{width: '1rem',verticalAlign: 'middle',marginRight:'1rem'}} alt="" />北京市&nbsp;&nbsp;</a>;
        this.state = {
            data:[]
        }
    }
    componentDidMount() {
        otherApi.getSwipers('data/data.json');
    }
    componentDidUpdate() {
        main.swiper();
    }
    render(){
        return (
            <div>
                <Header title={this.title} col={this.col}/>
                <div className="pad1 mt-4 mb-5">
                    <Swipers swi_data={this.props.swi_data} />
                    <ul className="oneBsList clearfix" style={{marginTop: '.5rem'}}>
                        <li>
                            <a href="javascript:void (0)">
                                <img src={require('../images/oneBsList1.jpg')} alt="" width="100%"/>
                                <div className="show">品牌<br/>设计</div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void (0)">
                                <img src={require('../images/oneBsList2.jpg')} alt="" width="100%"/>
                                <div className="show">摄影<br/>摄像</div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void (0)">
                                <img src={require('../images/oneBsList3.jpg')} alt="" width="100%"/>
                                <div className="show">烹饪<br/>料理</div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void (0)">
                                <img src={require('../images/oneBsList4.jpg')} alt="" width="100%"/>
                                <div className="show">建筑<br/>设计</div>
                            </a>
                        </li>
                    </ul>
                </div>
                <Footer/>
            </div>
        );
    }
}
const mapStateToProps = function(store) {
    return {
        swi_data: store.otherState.swi_data
    };
};
export default connect(mapStateToProps)(IndexRoute);
