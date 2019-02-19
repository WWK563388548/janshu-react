import axios from 'axios';
import { GET_DETAIL_DATA } from './constants';

export const getDetailData = (id) => {
    return (dispatch) => {
        axios.get('/api/home/detail.json?id=' + id).then((res) => {
            const data = res.data;
            const action = {
                type: GET_DETAIL_DATA,
                data,
            }
            dispatch(action);
        }).catch(((err) => {
            console.log("error", err);
        }));
    } 
}