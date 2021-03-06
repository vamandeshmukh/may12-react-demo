import { createSlice } from '@reduxjs/toolkit';
import AppUser from '../models/AppUser';

const AppUserSlice = createSlice({
    name: 'appUser',

    initialState: {
        currentUser: new AppUser(),
        isLoggedIn: false
    },

    reducers: {
        loginUser: (state, action) => {
            console.log(state);
            state.currentUser = action.payload;
            state.isLoggedIn = true;
        },
        logoutUser: (state, action) => {
            console.log(state);
            state.isLoggedIn = false;
        },
        updateUser: (state, action) => {
            console.log(state);
            state.currentUser = action.payload;
            state.isLoggedIn = true;
        }
    }
});

export const { loginUser, logoutUser, updateUser } = AppUserSlice.actions;

export default AppUserSlice.reducer;

