import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Department from "../models/Department";
import Employee from "../models/Employee";
import { getEmpById } from "../redux/EmpSlice";
import { getEmpByIdService, getAllEmpsService, addEmpService } from "../services/EmployeeService";

const EmpData = () => {

    const [eid, setEid] = useState('');
    const [emp, setEmp] = useState(new Employee());
    const [empToBeAdded, setEmpToBeAdded] = useState(new Employee());
    const [department, setDepartment] = useState(new Department());
    const [allEmps, setAllEmps] = useState([]);

    // fetch data from store 
    const empDataFromStore = useSelector((state) => { return state.emp.empObj });

    // send data to store - steps - 1, 2
    // step 1
    const dispatch = useDispatch();

    useEffect(
        () => {

        }
        , []);

    const handleChange = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setEid(evt.target.value);
    }

    const handleAddEmp = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setEmpToBeAdded({
            ...empToBeAdded,
            [e.target.name]: e.target.value
        });

        setDepartment({
            ...department,
            [e.target.name]: e.target.value
        });
    }

    const submitGetEmpById = (evt) => {
        console.log(eid);
        evt.preventDefault();
        getEmpByIdService(eid)
            .then((response) => {
                console.log(response.data);
                setEmp(response.data);
                dispatch(getEmpById(response.data)); // step 2 
                setEid('');
            })
            .catch((error) => {
                alert(error);
                setEmp(new Employee());
                setEid('');
            })
    }

    const submitGetAllEmps = (evt) => {
        evt.preventDefault();
        getAllEmpsService()
            .then((response) => {
                setAllEmps(response.data);
                console.log(response.data);
                console.log(allEmps);
            })
            .catch((error) => {
                alert(error);
                setAllEmps([]);
            });
    }

    const submitAddEmp = (evt) => {
        evt.preventDefault();
        let empTemp = { ...empToBeAdded, department };
        addEmpService(empTemp)
            .then((response) => {
                console.log(response.data);
                alert(`Employee with eid ${response.data.eid} added successfully.`);
            })
            .catch(() => {
                setEmpToBeAdded(new Employee());
                empTemp = '';
                alert("Employee could not be added.");
            });
    }

    return (
        <div className="container">
            <p className="display-4 text-primary py-3">EmpData</p>
            <hr />
            <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-4">
                <p className="lead">Add New Employee</p>
                <div className="form form-group" >
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="form-control mb-3 mt-3"
                        value={empToBeAdded.firstName}
                        onChange={handleAddEmp}
                        placeholder="Enter First Name" />
                    <input
                        type="number"
                        id="salary"
                        name="salary"
                        className="form-control mb-3 mt-3"
                        value={empToBeAdded.salary}
                        onChange={handleAddEmp}
                        placeholder="Enter salary" />
                    <input
                        type="number"
                        id="did"
                        name="did"
                        className="form-control mb-3 mt-3"
                        value={department.did}
                        onChange={handleAddEmp}
                        placeholder="Enter Department Id" />
                    <input
                        type="submit"
                        className="btn btn-outline-primary form-control mb-3 mt-3"
                        value="Add Employee"
                        onClick={submitAddEmp}
                    />
                </div>
            </div>
            <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-4">
                <p className="lead">Find an Employee</p>
                <div>
                    <form className="form form-group">
                        <input
                            type="number"
                            className="form-control mb-3 mt-3"
                            id="eid"
                            value={eid}
                            placeholder="Enter employee id"
                            onChange={handleChange}
                            autoFocus />
                        <input type="submit" className="form-control mb-3 mt-3 btn btn-outline-primary" value="Get Employee" onClick={submitGetEmpById} />
                    </form>
                </div>
                {/* this needs explanation  */}
                <div> {(emp.eid) &&
                    <div>
                        <p className="lead text-primary">Employee Details</p>
                        <p> Employee id: {emp.eid} </p>
                        <p> First name: {emp.firstName} </p>
                        <p> Salary: {emp.salary} </p>
                        {/* this needs explanation  */}
                        {(emp.department) &&
                            <div>
                                <p> Department id: {emp.department.did} </p>
                                <p> Department name: {emp.department.departmentName} </p>
                                <p> City: {emp.department.city}  </p>
                            </div>
                        }
                    </div>
                }
                </div>
                <div>
                    <hr />
                    <p className="lead">Emp Data from Store</p>
                    <p>{empDataFromStore.eid} {empDataFromStore.firstName} {empDataFromStore.salary} </p>
                </div>
            </div>
            <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-8">
                <p className="lead">Get All Employees</p>
                <div className="form form-group" >
                    <input
                        type="button"
                        className="btn btn-outline-primary form-control mb-3 mt-3"
                        value="Get All Employees"
                        onClick={submitGetAllEmps}
                    />
                </div>
                <div>
                    {/* this needs explanation  */}
                    <div> {(allEmps) &&
                        <div>
                            <p className="text-primary text-center font-weight-bold lead">List of All Employees</p>
                            {
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Emp Id</th>
                                            <th>First Name</th>
                                            <th>Salary</th>
                                            <th>Dept Id</th>
                                            <th>Dept Name</th>
                                            <th>City</th>
                                        </tr>
                                    </thead>
                                    {allEmps.map((e =>
                                        <tbody>
                                            <tr>
                                                <td>{e.eid}</td>
                                                <td>{e.firstName}</td>
                                                <td>{e.salary}</td>
                                                {(e.department) &&
                                                    <>
                                                        <td>{e.department.did}</td>
                                                        <td>{e.department.departmentName}</td>
                                                        <td>{e.department.city}</td>
                                                    </>
                                                }
                                            </tr>
                                        </tbody>
                                    ))}
                                </table>
                            }
                        </div>
                    }
                    </div>
                </div>
            </div>
        </div >
    );
}

export default EmpData;


// import { useState, useEffect } from "react";
// import Department from "../models/Department";
// import Employee from "../models/Employee";
// import { getEmpByIdService, getAllEmpsService, addEmpService } from "../services/EmployeeService";

// const EmpData = () => {

//     const [eid, setEid] = useState('');
//     const [emp, setEmp] = useState(new Employee());
//     const [empToBeAdded, setEmpToBeAdded] = useState(new Employee());
//     const [department, setDepartment] = useState(new Department());
//     const [allEmps, setAllEmps] = useState();

//     useEffect(
//         () => {

//         }
//         , []);

//     const handleChange = (evt) => {
//         console.log(evt.target.name);
//         console.log(evt.target.value);
//         setEid(evt.target.value);
//     }

//     const handleAddEmp = (e) => {
//         console.log(e.target.name);
//         console.log(e.target.value);
//         setEmpToBeAdded({
//             ...empToBeAdded,
//             [e.target.name]: e.target.value
//         });

//         setDepartment({
//             ...department,
//             [e.target.name]: e.target.value
//         });
//     }

//     const submitGetEmpById = (evt) => {
//         console.log(eid);
//         evt.preventDefault();
//         getEmpByIdService(eid)
//             .then((response) => {
//                 console.log(response.data);
//                 setEmp(response.data);
//             })
//             .catch((error) => {
//                 alert(error);
//                 setEmp(new Employee());
//             })
//     }

//     const submitGetAllEmps = (evt) => {
//         evt.preventDefault();
//         getAllEmpsService()
//             .then((response) => {
//                 setAllEmps(response.data);
//                 console.log(response.data);
//                 console.log(allEmps);
//             })
//             .catch((error) => {
//                 alert(error);
//                 setAllEmps([]);
//             });
//     }

//     const submitAddEmp = (evt) => {
//         evt.preventDefault();
//         let empTemp = { ...empToBeAdded, department };
//         addEmpService(empTemp)
//             .then((response) => {
//                 console.log(response.data);
//                 alert(`Employee with eid ${response.data.eid} added successfully.`);
//             })
//             .catch(() => {
//                 setEmpToBeAdded(new Employee());
//                 empTemp = '';
//                 alert("Employee could not be added.");
//             });
//     }

//     return (
//         <div className="container">
//             <p className="display-4 text-primary py-3">EmpData</p>
//             <hr />
//             <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-4">
//                 <p className="lead">Add New Employee</p>
//                 <div className="form form-group" >
//                     <input
//                         type="text"
//                         id="firstName"
//                         name="firstName"
//                         className="form-control mb-3 mt-3"
//                         value={empToBeAdded.firstName}
//                         onChange={handleAddEmp}
//                         placeholder="Enter First Name" />
//                     <input
//                         type="number"
//                         id="salary"
//                         name="salary"
//                         className="form-control mb-3 mt-3"
//                         value={empToBeAdded.salary}
//                         onChange={handleAddEmp}
//                         placeholder="Enter salary" />
//                     <input
//                         type="number"
//                         id="did"
//                         name="did"
//                         className="form-control mb-3 mt-3"
//                         value={department.did}
//                         onChange={handleAddEmp}
//                         placeholder="Enter Department Id" />
//                     <input
//                         type="submit"
//                         className="btn btn-outline-primary form-control mb-3 mt-3"
//                         value="Add Employee"
//                         onClick={submitAddEmp}
//                     />
//                 </div>
//             </div>
//             <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-4">
//                 <p className="lead">Find an Employee</p>
//                 <div>
//                     <form className="form form-group">
//                         <input
//                             type="number"
//                             className="form-control mb-3 mt-3"
//                             id="eid"
//                             value={eid}
//                             placeholder="Enter employee id"
//                             onChange={handleChange}
//                             autoFocus />
//                         <input type="submit" className="form-control mb-3 mt-3 btn btn-outline-primary" value="Get Employee" onClick={submitGetEmpById} />
//                     </form>
//                 </div>
//                 {/* this needs explanation  */}
//                 <div> {(emp.eid) &&
//                     <div>
//                         <p className="lead text-primary">Employee Details</p>
//                         <p> Employee id: {emp.eid} </p>
//                         <p> First name: {emp.firstName} </p>
//                         <p> Salary: {emp.salary} </p>
//                         {/* this needs explanation  */}
//                         {(emp.department) &&
//                             <div>
//                                 <p> Department id: {emp.department.did} </p>
//                                 <p> Department name: {emp.department.departmentName} </p>
//                                 <p> City: {emp.department.city}  </p>
//                             </div>
//                         }
//                     </div>
//                 }
//                 </div>
//             </div>
//             <div className="bg-white shadow shadow-regular mb-3 mt-3 px-3 py-3 pb-3 pt-3 col-8">
//                 <p className="lead">Get All Employees</p>
//                 <div className="form form-group" >
//                     <input
//                         type="button"
//                         className="btn btn-outline-primary form-control mb-3 mt-3"
//                         value="Get All Employees"
//                         onClick={submitGetAllEmps}
//                     />
//                 </div>
//                 <div>
//                     {/* this needs explanation  */}
//                     <div> {(allEmps) &&
//                         <div>
//                             <p className="text-primary text-center font-weight-bold lead">List of All Employees</p>
//                             {
//                                 <table className="table">
//                                     <thead>
//                                         <tr>
//                                             <th>Emp Id</th>
//                                             <th>First Name</th>
//                                             <th>Salary</th>
//                                             <th>Dept Id</th>
//                                             <th>Dept Name</th>
//                                             <th>City</th>
//                                         </tr>
//                                     </thead>
//                                     {allEmps.map((e =>
//                                         <tbody>
//                                             <tr>
//                                                 <td>{e.eid}</td>
//                                                 <td>{e.firstName}</td>
//                                                 <td>{e.salary}</td>
//                                                 {(e.department) &&
//                                                     <>
//                                                         <td>{e.department.did}</td>
//                                                         <td>{e.department.departmentName}</td>
//                                                         <td>{e.department.city}</td>
//                                                     </>
//                                                 }
//                                             </tr>
//                                         </tbody>
//                                     ))}
//                                 </table>
//                             }
//                         </div>
//                     }
//                     </div>
//                 </div>
//             </div>
//         </div >
//     );
// }

// export default EmpData;



// import axios from "axios";
// import { useEffect, useState } from "react";

// const EmpData = () => {

//     let [eid, setEid] = useState('');
//     let [empDataToDisplay, setEmpDataToDisplay] = useState({});

//     const handleChange = (evt) => {
//         setEid(evt.target.value);
//         setEmpDataToDisplay({
//             eid: '',
//             firstName: '',
//             salary: ''
//         });
//     }

//     const getEmpById = (evt) => {
//         console.log(eid);
//         axios.get(`http://localhost:9999/emp/get-emp-by-id/${eid}`)
//             .then((response) => {
//                 setEmpDataToDisplay(response.data);
//                 setEid('');
//             })
//             .catch(() => {
//                 alert(`Employee with eid ${eid} not found!`);
//                 setEid('');
//                 setEmpDataToDisplay({
//                     eid: '',
//                     firstName: '',
//                     salary: ''
//                 });
//             });
//         evt.preventDefault();
//     }

//     return (
//         <div className="container">
//             <div>
//                 <p className="display-4 text-primary py-3">EmpData</p>
//                 <hr />
//                 <p className="lead">Search Employee by Id</p>
//                 <div className="row pt-3">
//                     <div className="col-3 md-auto px-3 pt-3 bg-white shadow">
//                         <p className="lead text-info">Search employee:</p>
//                         <form className="form form-group">
//                             <input
//                                 className="form-control mb-3"
//                                 type="number"
//                                 id="eid"
//                                 name="eid"
//                                 value={eid}
//                                 placeholder="Enter eid"
//                                 onChange={handleChange}
//                                 autoFocus>
//                             </input>
//                             <input
//                                 className="form-control btn btn-outline-primary"
//                                 type="submit"
//                                 value="Search employee"
//                                 onClick={getEmpById}>
//                             </input>
//                         </form>
//                     </div>
//                     <div className="col-4 ml-auto mr-auto px-3 py-3 bg-white shadow">
//                         <p className="lead text-info">Employee details:</p>
//                         <hr />
//                         <p>Eid: {empDataToDisplay.eid}</p>
//                         <p>Name: {empDataToDisplay.firstName}</p>
//                         <p>Salary: {empDataToDisplay.salary}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default EmpData;


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
//         setEmp({ ...emp, [evt.target.name]: evt.target.value }); // imp line
//         setEmpDataToDisplay({
//             eid: '',
//             firstName: '',
//             salary: ''
//         });
//     }

//     const submitData = (evt) => {
//         console.log(evt.target.value);
//         setEmpDataToDisplay(emp); // imp line
//         setEmp({
//             eid: '',
//             firstName: '',
//             salary: ''
//         });
//         evt.preventDefault(); // find out
//     }

//     return (
//         <div className="container">
//             <div>
//                 <p className="display-4 text-primary py-3">EmpData</p>
//                 <hr />
//                 <div className="row py-3">
//                     <div className="col-3 md-auto px-3 py-3 bg-white shadow">
//                         <p className="lead text-info" >Please enter employee data:</p>
//                         <form className="form form-group">
//                             <input
//                                 className="form-control"
//                                 type="number"
//                                 id="eid"
//                                 name="eid"
//                                 value={emp.eid}
//                                 placeholder="Enter eid"
//                                 onChange={handleChange}
//                                 autoFocus>
//                             </input>
//                             <br />
//                             <input
//                                 className="form-control"
//                                 type="text"
//                                 id="firstName"
//                                 name="firstName"
//                                 value={emp.firstName}
//                                 placeholder="Enter firstname"
//                                 onChange={handleChange} >
//                             </input>
//                             <br />
//                             <input
//                                 className="form-control"
//                                 type="number"
//                                 id="salary"
//                                 name="salary"
//                                 value={emp.salary}
//                                 placeholder="Enter salary"
//                                 onChange={handleChange} >
//                             </input>
//                             <br />
//                             <input
//                                 className="form-control btn btn-outline-primary"
//                                 type="submit"
//                                 value="Submit"
//                                 onClick={submitData}>
//                             </input>
//                         </form>
//                     </div>
//                     <div className="col-4 ml-md-auto px-3 py-3 bg-white shadow">
//                         <p className="lead text-info">Employee data as entered:</p>
//                         <hr />
//                         <p>Eid: {emp.eid}</p>
//                         <p>Name: {emp.firstName}</p>
//                         <p>Salary: {emp.salary}</p>
//                     </div>

//                     <div className="col-4 ml-md-auto px-3 py-3 bg-white shadow">
//                         <p className="lead text-info">Employee data after submit:</p>
//                         <hr />
//                         <p>Eid: {empDataToDisplay.eid}</p>
//                         <p>Name: {empDataToDisplay.firstName}</p>
//                         <p>Salary: {empDataToDisplay.salary}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default EmpData;

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
