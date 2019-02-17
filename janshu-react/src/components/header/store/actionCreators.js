import * as actionTypes from './constants';
import axios from 'axios';
import {fromJS} from 'immutable';

export const searchFieldFocus = () => ({
    type: actionTypes.SEARCH_FIELD_FOCUS
});

export const searchFieldBlur = () => ({
    type: actionTypes.SEARCH_FIELD_BLUR
});

const getRecommandList = (data) => ({
    type: actionTypes.GET_SEARCH_RECOMMAND_DATA,
    totalPage: Math.ceil(data.length / 10),
    data: fromJS(data),
});

export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER,
});

export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE,
});

export const changePageList = (page) => ({
    type: actionTypes.CHANGE_PAGE_LIST,
    page,
});

export const getList = () => {
    // asynchronous request
    return  (dispatch) => {
        axios.get('/api/search/recommandList.json').then((res) => {
            const data = res.data;
            const action = getRecommandList(data.data);
            dispatch(action);
        }).catch(((err) => {
            console.log("error", err);
        }));
    };
};