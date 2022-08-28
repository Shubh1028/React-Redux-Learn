
import {createSlice, configureStore} from '@reduxjs/toolkit'


const inititalCounterState = {counter:  0}

const counterSlice = createSlice({
    name: 'counter',
    initialState: inititalCounterState,
    reducers: {
        increment(state, action) {
            state.counter = state.counter + action.payload;
        },
        decrement(state) {
            state.counter--;
        }
    }

})

const initialAuthState = { isAuthenticated : false }

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
})


const store = configureStore({
    // reducer: authSlice.reducer,
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
})

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;