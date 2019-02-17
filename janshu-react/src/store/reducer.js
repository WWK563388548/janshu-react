import {combineReducers} from 'redux-immutable';
import headerReducer from "../components/header/store/reducer";

const reducer = combineReducers({
    header: headerReducer,
});

export default reducer;