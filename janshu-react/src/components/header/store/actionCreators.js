import * as actionTypes from './constants';
import axios from 'axios';

export const searchFieldFocus = () => ({
    type: actionTypes.SEARCH_FIELD_FOCUS
});

export const searchFieldBlur = () => ({
    type: actionTypes.SEARCH_FIELD_BLUR
});

const getRecommandList = (data) => ({
    type: actionTypes.GET_SEARCH_RECOMMAND_DATA,
    data,
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