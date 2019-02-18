import axios from 'axios';
import {GET_HOME_DATA, GET_MORE_ARTICLE_DATA, TOGGLE_SCROLL_SHOW} from './constants';

export const getHomeData = () => {
    return (dispatch) => {
        axios.get('/api/home/home.json').then((res) => {
            const data = res.data;
            // console.log("api data", data)
            const action = {
                type: GET_HOME_DATA,
                data,
            }
            dispatch(action);
        }).catch(((err) => {
            console.log("error", err);
        }));
    }
}

export const getMoreArticles = (page) => {
    return (dispatch) => {
        axios.get('/api/home/more_articles.json').then((res) => {
            const data = res.data;
            console.log("Page 主要用于根据页码请求api时使用", page);
            const action = {
                type: GET_MORE_ARTICLE_DATA,
                data,
            }
            dispatch(action);
        }).catch(((err) => {
            console.log("error", err);
        }));
    }
}

export const toggleTopShow = (show) => ({
    type: TOGGLE_SCROLL_SHOW,
    show,
});