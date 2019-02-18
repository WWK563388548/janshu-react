import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    RecommandWrapper,
    RecommandItem,
} from '../home_style';

class Recommand extends Component {
    render() {
        return (
            <RecommandWrapper>
                {
                    this.props.recommandUrl.map((item) => {
                        return (
                            <RecommandItem key={item.get('id')} imageUrl={item.get("imageUrl")}/>
                        )
                    })
                }
            </RecommandWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    recommandUrl: state.getIn(["home", "recommandUrl"]),
});

export default connect(mapStateToProps, null)(Recommand);
