import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        characters: null
    },
    reducers: {
        // TODO
    },
});

export const {charactersRequest, charactersReceived, charactersFailed} = counterSlice.actions;

function factory(apiCall, path) {
    return {
        type: 'API_ACTION',
        apiCall,
        path
    };

}

export const getCharacters = (id) => {
    return factory(
        (id) => fetch('http://dsaasdasx').then(() => console.log('axios.get()')),
        'characters'
    );
};

export default counterSlice.reducer;
