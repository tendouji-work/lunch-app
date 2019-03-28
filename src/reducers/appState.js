import {
    UPDATE_DATA,
} from '../constants/actionType';


const defaultAppState = {
    pageData: {}
};

export const appStateReducer = (state = defaultAppState, action) => {
    switch (action.type) {
        case UPDATE_DATA:
            return {
                ...state,
                pageData: {
                    ...state.pageData,
                    ...action.data
                }
            };
        default:
            return state;
    }
};