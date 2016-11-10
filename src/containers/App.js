'use strict';
import '../plugs/swiper-3.4.0.min.js';
import React,{ Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Swipers from '../components/Swiper';
class App extends Component {
    constructor(props) {
        super(props);
        this.title = '欢迎光临';
        this.col = <span><img src={require('../images/icon-dingwei.png')} style={{width: '1rem',verticalAlign: 'middle',marginRight:'1rem'}} alt="" />北京市&nbsp;&nbsp;</span>;
        this.state = {
            data:[]
        }
    }
    componentDidMount() {
        $.get(this.props.ajaxurl+'data/data.json',function(data,status){
            this.setState(
                {
                    data:data[0]['swiper']
                }
            )
        }.bind(this));
    }
    componentDidUpdate() {
        new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            autoplay : 2000,
            loop:true,
            paginationClickable: true
        });
    }
    render(){
        return (
            <div>
                <Header title={this.title} col={this.col}/>
                <div className="pad1 mt-4 mb-5">
                    <Swipers data={this.state.data}/>
                    <ul className="oneBsList clearfix" style={{marginTop: ".5rem"}}>
                        <li>
                            <a href="">
                                <img src={require('../images/oneBsList1.jpg')} alt="" width="100%"/>
                                <div className="show">品牌<br/>设计</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={require('../images/oneBsList2.jpg')} alt="" width="100%"/>
                                <div className="show">摄影<br/>摄像</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={require('../images/oneBsList3.jpg')} alt="" width="100%"/>
                                <div className="show">烹饪<br/>料理</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={require('../images/oneBsList4.jpg')} alt="" width="100%"/>
                                <div className="show">建筑<br/>设计</div>
                            </a>
                        </li>
                    </ul>
                </div>
                <Footer/>
            </div>
        );
    };
}
export default App;
