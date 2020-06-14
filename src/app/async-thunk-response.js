
export const initialState = {
    data: null,
    isPending: true,
    isError: null,
}

export function generateReducer(thunk, storeKey, tranform = null) {
    return {
        [thunk.fulfilled]: (state, action) => {
            state[storeKey].data = typeof tranform === 'function' ? tranform(action.payload) : action.payload;
            state[storeKey].isPending = false;
            state[storeKey].isError = null;
        },
        [thunk.pending]: (state, action) => {
            state[storeKey] = {};
            state[storeKey].isPending = true;
            state[storeKey].isError = null;
        },
        [thunk.rejected]: (state, action) => {
            state[storeKey] = {};
            state[storeKey].isPending = true;
            state[storeKey].isError = 'error';
        },
    };
}
