import {combineReducers} from 'redux-immutable';
import headerReducer from "../components/header/store/reducer";
import homeReducer from '../components/pages/home/store/reducer';

// console.log("headerReducer", headerReducer);
// console.log("homeReducer", homeReducer);
const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
});

export default reducer;