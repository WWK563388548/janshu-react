import axios from 'axios';
import {GET_HOME_DATA} from './constants';

export const getHomeData = () => {
    return (dispatch) => {
        axios.get('/api/home/home.json').then((res) => {
            const data = res.data;
            console.log("api data", data)
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