import {combineReducers} from 'redux-immutable';
import headerReducer from "../components/header/store/reducer";
import homeReducer from '../components/pages/home/store/reducer';
import detailReducer from '../components/pages/detail/store/reducer';

// console.log("headerReducer", headerReducer);
// console.log("homeReducer", homeReducer);
const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
});

export default reducer;