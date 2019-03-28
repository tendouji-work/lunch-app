import {
    UPDATE_DATA,
} from '../constants/actionType';


const defaultAppState = {
    appData: {}
};

export const appStateReducer = (state = defaultAppState, action) => {
    switch (action.type) {
        case UPDATE_DATA:
            return {
                ...state,
                appData: {
                    ...state.appData,
                    ...action.data
                }
            };
        default:
            return state;
    }
};