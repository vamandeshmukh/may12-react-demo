
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Employee from '../models/Employee';
import { getEmpByIdService } from '../services/EmployeeService';

const fetchEmpById = createAsyncThunk(
    'emps/fetchByIdRole',
    async (eid, thunkAPI) => {
        console.log(`fetchEmpById`);
        const response = await getEmpByIdService(eid);
        return response;
    });

const EmpSlice = createSlice({
    name: 'emp',
    initialState: {
        // empObj: new Employee(),
        empObj: {},
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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchEmpById, (state, action) => {
            console.log(`extraReducers 1`);
            state.empList.push(action.payload);
        });
    }

});

export const { getEmpById, getAllEmps } = EmpSlice.actions;
export { fetchEmpById };

export default EmpSlice.reducer;




// import { createSlice } from '@reduxjs/toolkit';
// import Employee from '../models/Employee';

// const EmpSlice = createSlice({
//     name: 'emp',
//     initialState: {
//         // empObj: new Employee(),
//         empObj: {},
//         empList: []
//     },

//     reducers: {
//         getEmpById: (state, action) => {
//             console.log(state);
//             console.log(action.payload);
//             state.empObj = action.payload;
//         },
//         getAllEmps: (state, action) => {
//             console.log(state);
//             console.log(action.payload);
//             state.empList = action.payload;
//         }
//         // create more functions here
//     }
// });

// export const { getEmpById, getAllEmps } = EmpSlice.actions;

// export default EmpSlice.reducer;

