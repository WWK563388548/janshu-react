const defaultState = {
    focused: false,
};

export default (state = defaultState, action) => {
    if(action.type === 'search_field_focus'){
        return {
            focused: true,
        }
    }

    if(action.type === 'search_field_blur'){
        return {
            focused: false,
        }
    }
    
    return state;
};