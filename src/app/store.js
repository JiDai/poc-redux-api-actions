import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import charactersReducer from '../features/characters/charactersSlice';
import toasterMiddleware from './toaster-middleware';

export default configureStore({
    reducer: {
        character: charactersReducer,
    },
    middleware: [toasterMiddleware, thunk]
});

