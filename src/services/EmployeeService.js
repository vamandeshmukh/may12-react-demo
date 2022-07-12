import axios from 'axios';

// Create services for other components in this way. 

const springBootAppUrl = `http://localhost:9999/`;

const getEmpByIdService = (eid) => {
    console.log('getEmpByIdService');
    return axios.get(`${springBootAppUrl}emp/get-emp-by-id/${eid}`);
}
const getAllEmpsService = () => {
    console.log(`getAllEmpsService`);
    return axios.get(`${springBootAppUrl}emp/get-all-emps`);
}

const addEmpService = (emp) => {
    console.log(`addEmpService`);
    return axios.post(`${springBootAppUrl}emp/add-emp`, emp);
}

// add more functionalities here 

export { getEmpByIdService, getAllEmpsService, addEmpService };
