
import { useEffect, useState } from "react";

const EmpData = () => {

    let [emp, setEmp] = useState({});
    let [empDataToDisplay, setEmpDataToDisplay] = useState({});

    useEffect(() => {
        setEmp({
            eid: '',
            firstName: '',
            salary: ''
        });
    }, []);

    const handleChange = (evt) => {
        console.log(evt.target.value);
        setEmp({ ...emp, [evt.target.name]: evt.target.value }); // imp line 
        setEmpDataToDisplay({
            eid: '',
            firstName: '',
            salary: ''
        });
    }

    const submitData = (evt) => {
        console.log(evt.target.value);
        setEmpDataToDisplay(emp); // imp line 
        setEmp({
            eid: '',
            firstName: '',
            salary: ''
        });
        evt.preventDefault(); // find out 
    }

    return (
        <div className="container">
            <div>
                <p className="display-4 text-primary py-3">EmpData Component</p>
                <hr />
                <div className="row py-3">
                    <div className="col-3 md-auto px-3 py-3 bg-white shadow">
                        <p className="lead text-info" >Please enter employee data:</p>
                        <form className="form form-group">
                            <input
                                className="form-control"
                                type="number"
                                id="eid"
                                name="eid"
                                value={emp.eid}
                                placeholder="Enter eid"
                                onChange={handleChange}
                                autoFocus>
                            </input>
                            <br />
                            <input
                                className="form-control"
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={emp.firstName}
                                placeholder="Enter firstname"
                                onChange={handleChange} >
                            </input>
                            <br />
                            <input
                                className="form-control"
                                type="number"
                                id="salary"
                                name="salary"
                                value={emp.salary}
                                placeholder="Enter salary"
                                onChange={handleChange} >
                            </input>
                            <br />
                            <input
                                className="form-control btn btn-outline-primary"
                                type="submit"
                                value="Submit"
                                onClick={submitData}>
                            </input>
                        </form>
                    </div>
                    <div className="col-3 ml-md-auto px-3 py-3 bg-white shadow">
                        <p className="lead text-info">Employee data as entered:</p>
                        <hr />
                        <p>Eid: {emp.eid}</p>
                        <p>Name: {emp.firstName}</p>
                        <p>Salary: {emp.salary}</p>
                    </div>

                    <div className="col-3 ml-md-auto px-3 py-3 bg-white shadow">
                        <p className="lead text-info">Employee data after submit:</p>
                        <hr />
                        <p>Eid: {empDataToDisplay.eid}</p>
                        <p>Name: {empDataToDisplay.firstName}</p>
                        <p>Salary: {empDataToDisplay.salary}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmpData;

// =================================
// try this code (without bootstrap)
// =================================

// import { useEffect, useState } from "react";

// const EmpData = () => {

//     let [emp, setEmp] = useState({});
//     let [empDataToDisplay, setEmpDataToDisplay] = useState({});

//     useEffect(() => {
//         setEmp({
//             eid: '',
//             firstName: '',
//             salary: ''
//         });
//     }, []);

//     const handleChange = (evt) => {
//         console.log(evt.target.value);
//         setEmp({ ...emp, [evt.target.name]: evt.target.value });
//     }

//     const sumbitData = (evt) => {
//         console.log(evt.target.value);
//         setEmpDataToDisplay(emp);
//         evt.preventDefault();
//     }

//     return (
//         <div>
//             <div>
//                 <h1>EmpData Component</h1>
//                 <p>Please enter Employee data:</p>
//                 <input
//                     type="number"
//                     id="eid"
//                     name="eid"
//                     value={emp.eid}
//                     placeholder="Enter eid"
//                     onChange={handleChange} >
//                 </input>
//                 <br />
//                 <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     value={emp.firstName}
//                     placeholder="Enter firstname"
//                     onChange={handleChange} >
//                 </input>
//                 <br />
//                 <input
//                     type="number"
//                     id="salary"
//                     name="salary"
//                     value={emp.salary}
//                     placeholder="Enter salary"
//                     onChange={handleChange} >
//                 </input>
//                 <br />
//                 <input
//                     type="button"
//                     value="Submit"
//                     onClick={sumbitData}>
//                 </input>
//             </div>
//             <div>
//                 <p>Employee data as being entered:</p>
//                 <p>Eid: {emp.eid}</p>
//                 <p>Name: {emp.firstName}</p>
//                 <p>Salary: {emp.salary}</p>
//             </div>
//             <div>
//                 <p>Employee data after clicking submit:</p>
//                 <p>Eid: {empDataToDisplay.eid}</p>
//                 <p>Name: {empDataToDisplay.firstName}</p>
//                 <p>Salary: {empDataToDisplay.salary}</p>
//             </div>
//         </div>


//     );
// }

// export default EmpData;

// =================================
// upto here
// =================================

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
