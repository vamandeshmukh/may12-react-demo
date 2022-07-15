import axios from 'axios';
// see axios APIs here - https://www.npmjs.com/package/axios 

const springBootAppUrl = `http://localhost:9999/`;

const registerService = (appUser) => {
    console.log(appUser);
    return axios.post(`${springBootAppUrl}user/register`, appUser);
}

const loginService = (appUser) => {
    console.log(appUser);
    return axios.post(`${springBootAppUrl}user/login`, appUser);
}

const logoutService = (appUser) => {
    console.log(appUser);
    return axios.get(`${springBootAppUrl}user/logout/${appUser.userName}`);
}

const updateUserService = (appUser) => {
    console.log(appUser);
    return axios.put(`http://localhost:9999/user/update-user`, appUser);
}
export { registerService, loginService, logoutService, updateUserService };
