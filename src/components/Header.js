
// header with bootstrap
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const Header = () => {

    const loginStatus = useSelector((store) => { return store.appUser.isLoggedIn; });
    const [shouldLogout, setShouldLogout] = useState(false);



    return (
        <div className=' bg-dark'>
            <div className=' container-fluid'>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <Link className="navbar-brand" to='/'>
                        <img height='30px' src='https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo.svg' alt='Capgemini Logo' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className=" navbar-nav ml-auto">
                            <div> {loginStatus && <Link className="nav-link" to='/emp'>Emp</Link>} </div>
                            <div> {loginStatus && <Link className="nav-link" to='/parent'>Parent</Link>} </div>
                            <div> {!loginStatus && <Link className="nav-link" to='/register'>Register</Link>} </div>
                            <div> {!loginStatus && <Link className="nav-link" to='/login'>Login</Link>} </div>
                            <div> {loginStatus &&
                                <div className="nav-item dropdown navbar-dark">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                                        Profile
                                    </Link>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="/profile">View</Link>
                                        <Link className="dropdown-item" to="/update">Update</Link>
                                        <div className="dropdown-divider"></div>
                                        <button className="dropdown-item" onClick={() => {setShouldLogout(true)}}>Logout</button>
                                    </div>
                                </div>
                            }
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div> {shouldLogout && <Logout />} </div>
        </div >
    );
}

export default Header;



// // header without bootstrap

// import { Link } from 'react-router-dom';

// const Header = () => {

//     return (
//         <div>
//             <div>
//                 <Link to="/" >
//                      <img height='30px' src='https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo.svg' alt='Capgemini Logo'/>
//                 </Link>
//                 <Link to="/emp" >EmpData</Link>
//                 <Link to="/parent" >Parent</Link>
//                 <Link to="/login" >Login</Link>
//             </div>
//         </div >
//     );
// }

// export default Header;



