
import { createSlice } from '@reduxjs/toolkit';
import Employee from '../models/Employee';

const EmpSlice = createSlice({
    name: 'emp',
    initialState: {
        // empObj: new Employee(),
        empObj: { eid: 98765, firstName: 'Zxywv', salary: 9876543 },
        empList: []
    },

    reducers: {
        getEmpById: (state, action) => {
            console.log(state);
            console.log(action.payload);
            state.empObj = action.payload;
        },
        getAllEmps: (state, action) => {
            console.log(state);
            console.log(action.payload);
            state.empList = action.payload;
        }
        // create more functions here  
    }
});

export const { getEmpById, getAllEmps } = EmpSlice.actions;

export default EmpSlice.reducer;
