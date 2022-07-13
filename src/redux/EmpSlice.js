
import { createSlice } from '@reduxjs/toolkit';
import Employee from '../models/Employee';

const empSlice = createSlice({
    name: 'emp',

    initialState: {
        empObj: new Employee(),
        empList: []
    },

    reducers: {
        getEmpById: (state, action) => {
            console.log(state);
            console.log(action.payload);
            state.empObj = action.payload;
        }
        // more functions for this component state 
    }
});
export const { getEmpById } = empSlice.actions;
export default empSlice.reducer;