
const EmpData = () => {

    const emp = {
        eid: 101,
        firstName: 'Sonu',
        salary: 50000
    };

    return (
        <div>
            <h1>EmpData Component</h1>
            <p>Employee details:</p>
            <p>Employee id: {emp.eid} </p>
            <p>Name: {emp.firstName} </p>
            <p>Salary: {emp.salary} </p>
        </div>
    );
}

export default EmpData;
