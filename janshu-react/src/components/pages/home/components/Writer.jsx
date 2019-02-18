import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    WriterWrapper,
    WriteerItem,
} from '../home_style';

class Writer extends Component {
    render() {
        return (
            <WriterWrapper>
                {
                    this.props.writerList.map((item) => {
                        return (
                            <WriteerItem key={item.get("id")}>
                                <img 
                                    className="topic-pic"
                                    src={item.get("avatar")}
                                    alt={item.get("name")}
                                />          
                                <a className="name" href="#">{item.get("name")}</a>
                                <p className="desc">{`${item.get("likes")}喜欢`}</p>
                            </WriteerItem> 
                        )
                    })
                }
            </WriterWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    writerList: state.getIn(["home", "writerList"]),
});

export default connect(mapStateToProps, null)(Writer);