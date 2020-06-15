import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {fetchCharacter, fetchCharacters, fetchUnknown, UserError} from "../../services/API";
import {generateReducer, initialState} from "../../app/async-thunk-response";


// First, create the thunks
export const charactersThunk = createAsyncThunk(
    fetchCharacters.name,
    async () => {
        const response = await fetchCharacters();
        return response.results;
    }
);

export const characterThunk = createAsyncThunk(
    fetchCharacter.name,
    async (characterId) => {
        const response = await fetchCharacter(characterId);
        return response;
    }
);

export const dummyThunk = createAsyncThunk(
    fetchUnknown.name,
    async () => {
        try {
            const response = await fetchUnknown();
            return response;
        } catch (e) {
            // Will display a toaster
            throw new UserError('Oups ca sent le sapin');
        }
    }
);

// Then, handle actions in your reducers:
const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        characters: initialState,
        character: initialState,
        dummy: initialState,
    },
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: {
        // Add reducers for additional action types here, and handle loading state as needed
        ...generateReducer(charactersThunk, 'characters'),
        ...generateReducer(characterThunk, 'character'),
        ...generateReducer(dummyThunk, 'dummy'),
    }
});

export default charactersSlice.reducer;
