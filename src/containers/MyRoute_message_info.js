'use strict';
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Header from '../components/Header';
import * as userApi from '../api/user-api';
class MyRoute_message_info extends Component {
    constructor(props) {
        super(props);
        this.title = '个人信息';
        this.col = <Link to='/My/address' className="Bri">编辑&nbsp;&nbsp;</Link>;
    }
    componentDidMount() {
        userApi.getUsers();
    }
    render(){
        return (
            <div>
                <Header title={this.title} col={this.col}/>
                    {this.props.users.map((repo,i) => {
                        return (
                            <div className="mt-4" key = {i}>
                                <div className="pad1">
                                    <div className="body-back-2">
                                        <div className="pad1">
                                            <div className="form-group1">
                                                <div className="te-cell wh-no fo-se-15 pad1 pl-0">个人信息</div>
                                            </div>
                                            <div className="form-group1">
                                                <div className="fo-se-14 pad1 pl-0"><span className="mr-1 fo-co-4">姓名</span><span>{repo.addressname}</span></div>
                                            </div>
                                            <div className="form-group1">
                                                <div className="fo-se-14 pad1 pl-0"><span className="mr-1 fo-co-4">电话</span><span>{repo.addressphone}</span></div>
                                            </div>
                                            <div className="form-group1">
                                                <div className="fo-se-14 pad1 pl-0"><span className="mr-1 fo-co-4">地址</span><span>{repo.address}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        );
    }
}
const mapStateToProps = function(store) {
    return {
        users: store.userState.users
    };
};
export default connect(mapStateToProps)(MyRoute_message_info);