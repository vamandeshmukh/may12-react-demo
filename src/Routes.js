import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EmpData from './components/EmpData';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Parent from './components/Parent';


const Routes = () => {

    return (
        <div>
            <div>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path='/login'> <Login />  </Route>
                        <Route path='/emp'> <EmpData />  </Route>
                        <Route path='/parent'> <Parent />  </Route>
                        <Route path='/'> <Home />  </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </div >
    );
}

export default Routes;





// const Routes = () => {

//     return (
//         <div className="container-fluid">
//             <p>Routes Component</p>
//             {/* base url - http://localhost:3000/

//             http://localhost:3000/home
//             http://localhost:3000/login
//             http://localhost:3000/empdata
//             http://localhost:3000/parent

//             if /login then display login component
//             if /empdata then display empData component
//             if /parent then display parent component
//             */}
//         </div >
//     );
// }

// export default Routes;


