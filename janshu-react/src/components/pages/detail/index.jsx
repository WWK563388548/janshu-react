import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    DetailWrapper,
    Header,
    Content,
} from './detail_style';
import { getDetailData } from './store/actionCreators';
import { withRouter } from 'react-router-dom';

class Detail extends Component {

    componentDidMount() {
        this.props.getDetailData(this.props.match.params.id);
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
    getDetailData(id){
        dispatch(getDetailData());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));