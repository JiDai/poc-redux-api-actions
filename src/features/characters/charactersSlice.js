import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {fetchCharacter, fetchCharacters} from "../../services/API";
import {initialState, generateReducer} from "../../app/async-thunk-response";


// First, create the thunks
export const charactersThunk = createAsyncThunk(
    fetchCharacters.name,
    async (userId, thunkAPI) => {
        const response = await fetchCharacters();
        return response.results;
    }
);

export const characterThunk = createAsyncThunk(
    fetchCharacter.name,
    async (characterId, thunkAPI) => {
        const response = await fetchCharacter(characterId);
        return response;
    }
);

// Then, handle actions in your reducers:
const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        characters: initialState,
        character: initialState,
    },
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: {
        // Add reducers for additional action types here, and handle loading state as needed
        ...generateReducer(charactersThunk, 'characters'),
        ...generateReducer(characterThunk, 'character'),
    }
});

export default charactersSlice.reducer;
