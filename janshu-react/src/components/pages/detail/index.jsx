import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    DetailWrapper,
    Header,
    Content,
} from './detail_style';
import { getDetailData } from './store/actionCreators';

class Detail extends Component {

    componentDidMount() {
        this.props.getDetailData();
    }
    render() {
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
            </DetailWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    title: state.getIn(["detail", "title"]),
    content: state.getIn(["detail", "content"]),
});

const mapDispatchToProps = (dispatch) => ({
    getDetailData(){
        dispatch(getDetailData());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);