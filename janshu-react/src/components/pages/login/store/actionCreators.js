import axios from 'axios';
import {HANDLE_LOGIN, HANDLE_LOGOUT} from './constants';

export const handleLogin = (account, password) => {
    return (dispatch) => {
        axios.get('/api/home/login.json?account=' + account + '&password=' + password).then((res) => {
            const data = res.data;
            const action = {
                type: HANDLE_LOGIN,
                data,
            }
            dispatch(action);
        }).catch(((err) => {
            console.log("error", err);
        }));
    };
};

export const handleLogout = () => ({
    type: HANDLE_LOGOUT,
    value: false,
});