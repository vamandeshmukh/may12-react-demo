import { Link } from 'react-router-dom';
import EmpData from './EmpData';
import Login from './Login';
import Parent from './Parent';

const Header = () => {

    return (
        <div>
            <div>
                <Link to="/emp" >EmpData</Link>
                <Link to="/parent" >Parent</Link>
                <Link to="/login" >Login</Link>
            </div>
        </div >
    );
}

export default Header;



