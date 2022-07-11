
import { useState } from "react";
import EmpData from "./components/EmpData";
import Login from "./components/Login";
import Parent from './components/Parent';
const App = () => {

  return (
    <div className="container-fluid">
      <div className="container">
        <div>
          <p className="display-4 text-primary">App Component</p>
          <hr />
          <p>This is App component.</p>
        </div>
      </div>
      <Parent />
      {/* <EmpData />
      <Login /> */}
    </div >
  );
}

export default App;


// Important React Concepts
// component, JSX, props, state 

// routing, service, redux, thunk, ... 

// types of components - 2
// class component // 
// function component // use this 

// function component 

// export {App, App2, App3};

// // class component 
// import React from "react";

// class App extends React.Component {

//   render() {
//     return (
//       <div>
//         <h1>CG React App</h1>
//         <p>Welcome to Capgemini ReactJS appliation.</p>
//       </div >
//     );
//   }
// }
// export default App;


// function App() {

//   return (
//     <div>
//       <h1>CG React App</h1>
//       <p>Welcome to Capgemini ReactJS appliation.</p>
//     </div>
//   );

// }
// export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
