
// steps to use redux in React app:
// 1. create store
// 2. provice store to index.js
// 3. create slices for each components 
// 4. import methods from those slices into components 
// 5. exchage data using those methods  


import { configureStore } from "@reduxjs/toolkit";
// import { empReducer } from './EmpSlice';
import empReducer from './EmpSlice';

console.log('store initilized');
const store = configureStore({
    reducer: {
        emp: empReducer
        // create more reducers for other components 
    }
});

export default store;
