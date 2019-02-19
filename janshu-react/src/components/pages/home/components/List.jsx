import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMoreArticles } from '../store/actionCreators';
import {
    ListItem,
    ListInfo,
    LoadMore,
} from '../home_style';
import { Link } from 'react-router-dom';

class List extends Component {
    render() {
        return (
            <div>
                {
                    this.props.articleList.map((item, index) => {
                        return (
                            <Link key={index} to={`/detail/${item.get('id')}`}>
                                <ListItem>
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
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => this.props.getMoreArticles(this.props.articlePage)}>加载更多</LoadMore>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    articleList: state.getIn(["home", "articleList"]),
    articlePage: state.getIn(["home", "articlePage"]),
});

const mapDispatchToProps = (dispatch) => ({
    getMoreArticles(page) {
        dispatch(getMoreArticles(page));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);