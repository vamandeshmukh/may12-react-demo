import { useEffect, useState } from "react";

const EmpData = () => {

    let [emp, setEmp] = useState({});

    useEffect(() => {
        setEmp({
            eid: '',
            firstName: '',
            salary: ''
        });
    }, []);

    const handleChange = (evt) => {
        console.log(evt.target.value);
        // setEmp(...emp[evt.target.name] evt.target.value);
    }

    const sumbitData = (evt) => {
        console.log(evt.target.value);
        // code 
    }

    return (
        <div>
            <h1>EmpData Component</h1>
            <p>Please enter Employee data:</p>
            <input
                // className="text-primary"
                type="number"
                id="eid"
                name="eid"
                value={emp.eid}
                placeholder="Enter eid"
                onChange={handleChange} >
            </input>
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={emp.firstName}
                placeholder="Enter firstname"
                onChange={handleChange} >
            </input>
            <input
                type="number"
                id="salary"
                name="salary"
                value={emp.salary}
                placeholder="Enter salary"
                onChange={handleChange} >
            </input>
            <input
                type="button"
                value="Submit"
                onClick={sumbitData}>
            </input>
        </div>
    );
}

export default EmpData;


// import { useState } from "react";

// const EmpData = () => {

//     let [myName, setMyName] = useState('');

//     // using useState() any type of state variable can be created
//     let [numberVariable, setNumberVariable] = useState(0);
//     let [stringVariable, setStringVariable] = useState('');
//     let [booleanVariable, setBooleanVariable] = useState(false);
//     let [arrayVariable, setArrayVariable] = useState([]);
//     let [objectVariable, setObjectVariable] = useState({});

//     const handleChange = (evt) => {
//         setMyName(evt.target.value); // this works
//     }

//     return (
//         <div>
//             <h1>EmpData Component</h1>
//             <p>Please enter your name:</p>
//             <input
//                 type="text"
//                 name="myName"
//                 value={myName}
//                 onChange={handleChange} >
//             </input>
//             <p>Welcome {myName}! </p>
//         </div>
//     );
// }

// export default EmpData;


// // state - one object for one component

// import { useState } from "react";

// const EmpData = () => {

//     // let myName = '';
//     let [myName, setMyName] = useState('');

//     const handleChange = (evt) => {
//         // myName = evt.target.value; // this does not work
//         setMyName(evt.target.value); // this works

//         console.log(evt.target.value);
//         console.log(evt.target.name);
//     }

//     return (
//         <div>
//             <h1>EmpData Component</h1>
//             <p>Please enter your name:</p>
//             <input
//                 type="text"
//                 name="myName"
//                 value={myName}
//                 onChange={handleChange} >
//             </input>
//             <p>Welcome {myName}! </p>
//         </div>
//     );
// }

// export default EmpData;


// const EmpData = () => {

//     const emp = {
//         eid: 101,
//         firstName: 'Sonu',
//         salary: 50000
//     };

//     return (
//         <div>
//             <h1>EmpData Component</h1>
//             <p>Employee details:</p>
//             <p>Employee id: {emp.eid} </p>
//             <p>Name: {emp.firstName} </p>
//             <p>Salary: {emp.salary} </p>
//             <p>Please enter your name:</p>
//             <input></input>
//             <p></p>
//         </div>
//     );
// }

// export default EmpData;
