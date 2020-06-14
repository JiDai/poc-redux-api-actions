import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import charactersReducer from '../features/characters/charactersSlice';

export default configureStore({
    reducer: {
        character: charactersReducer,
    },
    middleware: [thunk]
});

