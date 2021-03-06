import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import AppUser from '../models/AppUser';
import { loginUser, logoutUser } from '../redux/AppUserSlice';
import { loginService } from '../services/AppUserService';

const Login = () => {

    const [appUser, setAppUser] = useState(new AppUser());
    const dispatch = useDispatch();
    const history = useHistory();

    const handleAppUser = (event) => {
        setAppUser({
            ...appUser,
            [event.target.name]: event.target.value
        });
    };

    const submitAppUser = (event) => {
        console.log(appUser);
        loginService(appUser)
            .then((response) => {
                dispatch(loginUser(response.data));
                alert(`Login successful for ${response.data.userName}!`);
                history.push("/");
            })
            .catch((error) => {
                dispatch(logoutUser());
                console.log(error.message);
                // alert(`Something is wrong ${error.response}!`);
            });
        event.preventDefault();
    }

    return (
        <div className="container" >
            <p className="display-4 text-primary py-3">Login</p>
            <hr />
            <div className="col-3 mt-3 py-3 shadow bg-white" >
                <h1 className="lead text-primary pb-2">Login</h1>
                <form className="form form-group form-dark " onSubmit={submitAppUser}>
                    <div>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            className="form-control mb-3"
                            placeholder="Enter username"
                            value={appUser.userName}
                            onChange={handleAppUser}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control mb-3"
                            placeholder="Enter password"
                            value={appUser.password}
                            onChange={handleAppUser}
                            required
                        />
                        <div className="form-group">
                            <select className="form-control mb-3" name="role" id="role" onChange={handleAppUser}>
                                <option value="Role">Select a role</option>
                                <option value="ADMIN">ADMIN</option>
                                <option value="EMPLOYEE">EMPLOYEE</option>
                                <option value="MANAGER">MANAGER</option>
                            </select>
                        </div>
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-outline-primary"
                            value="Login"
                        />
                    </div>
                </form>
            </div>
            <div className="py-3 ">
                <Link to="/register" className="btn btn-outline-primary col-3">Not yet registered? Register</Link>
            </div>
        </div >
    )
}
export default Login;





// import React from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import AppUser from '../models/AppUser';

// const Login = () => {

//     const [appUser, setAppUser] = useState(new AppUser());

//     const handleAppUser = (event) => {
//         console.log(event.target.name);
//         console.log(event.target.value);
//         setAppUser({
//             ...appUser,
//             [event.target.name]: event.target.value
//         });
//     };

//     const submitAppUser = (event) => {
//         if (appUser.userName === "Sonu" && appUser.password === "Sonu") {
//             alert(`Login for ${appUser.userName} is successful!`);
//             setAppUser({ userName: '', password: '', role: '' });
//         }
//         else {
//             alert(`Login failed for ${appUser.userName}!`);
//             setAppUser({ userName: '', password: '', role: '' });
//         }
//         event.preventDefault();
//     }

//     return (
//         <div className="container" >
//             <p className="display-4 text-primary py-3">Login Component</p>
//             <hr />
//             <div className="col-3 mt-3 py-3 shadow bg-white" >
//                 <h1 className="lead text-primary pb-2">Login</h1>
//                 <form className="form form-group form-dark " onSubmit={submitAppUser}>
//                     <div>
//                         <input
//                             type="text"
//                             name="userName"
//                             id="userName"
//                             className="form-control mb-3"
//                             placeholder="Enter username"
//                             value={appUser.userName}
//                             onChange={handleAppUser}
//                             required
//                         />
//                         <input
//                             type="password"
//                             name="password"
//                             id="password"
//                             className="form-control mb-3"
//                             placeholder="Enter password"
//                             value={appUser.password}
//                             onChange={handleAppUser}
//                             required
//                         />
//                         <div className="form-group">
//                             <select className="form-control mb-3" name="role" id="role" onChange={handleAppUser}>
//                                 <option value="Role">Select a role</option>
//                                 <option value="ADMIN">ADMIN</option>
//                                 <option value="EMPLOYEE">EMPLOYEE</option>
//                                 <option value="MANAGER">MANAGER</option>
//                             </select>
//                         </div>
//                         <input
//                             type="submit"
//                             id="submit"
//                             name="submit"
//                             className="form-control btn btn-outline-primary mb-3"
//                             value="Login"
//                             onClick={submitAppUser}
//                         />
//                     </div>
//                 </form>
//             </div>
//             <div className="py-3 ">
//                 <Link to="/register" className="btn btn-outline-primary col-3">Not yet registered? Register</Link>
//             </div>
//         </div >
//     )
// }
// export default Login;


