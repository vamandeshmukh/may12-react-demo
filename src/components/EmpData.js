
const EmpData = () => {

    let myName = '';

    const handleChange = (evt) => {
        console.log(evt.target.value);
        console.log(evt.target.name);
    }

    return (
        <div>
            <h1>EmpData Component</h1>
            <p>Please enter your name:</p>
            <input
                type="text"
                name="myName"
                value={myName}
                onChange={handleChange} >
            </input>
            <p>Welcome {myName}! </p>
        </div>
    );
}

export default EmpData;


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
