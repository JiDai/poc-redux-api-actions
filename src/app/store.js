import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import thunk from 'redux-thunk'; // no changes here ????

const apiThunk = store => next => action => {
    let result;
    if (action.type === 'API_ACTION') {
        const apiAction = (function (dispatch) {
            store.dispatch({
                type: 'API_ACTION_REQUEST',
                path: action.path
            });
            action.apiCall()
                .then(() => {
                    store.dispatch({
                        type: 'API_ACTION_RECEIVE',
                        path: action.path
                    });
                })
                .catch(() => {
                    store.dispatch({
                        type: 'API_ACTION_FAIL',
                        path: action.path
                    });
                });
        });
        return next(apiAction);
    }

    return next(action);
};

const crashReporter = store => next => action => {
    try {
        return next(action);
    } catch (err) {
        console.error('Caught an exception!', err);
        throw err;
    }
};


export default configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: [apiThunk, thunk, crashReporter]
});
