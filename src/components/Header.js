// header with bootstrap 
import { Link } from 'react-router-dom';

const Header = () => {
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
                            <Link className="nav-link" to='/emp'>Emp</Link>
                            <Link className="nav-link" to='/parent'>Parent</Link>
                            <Link className="nav-link" to='/register'>Register</Link>
                            <Link className="nav-link" to='/login'>Login</Link>
                            <Link className="nav-link" to='/logout'>Logout</Link>
                        </div>
                    </div>
                </nav>
            </div>
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



