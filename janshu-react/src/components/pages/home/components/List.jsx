import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    ListItem,
    ListInfo,
} from '../home_style';

class List extends Component {
    render() {
        return (
            <div>
                {
                    this.props.articleList.map((item) => {
                        return (
                            <ListItem key={item.get("id")}>
                                <img
                                    className="pic"
                                    src={item.get("image")}
                                    alt={item.get("title")}
                                />
                                <ListInfo>
                                    <a
                                        href="#"
                                        className="title"
                                    >
                                        {item.get("title")}
                                    </a>
                                    <p className="desc">
                                        {item.get("desc")}    
                                    </p>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    articleList: state.getIn(["home", "articleList"]),
});

export default connect(mapStateToProps, null)(List);