import { useEffect, useState } from "react";

const Child = (props) => {

    // const [parentDataInChild, setParentDataInChild] = ???; // get data from Parent component 
    let [childData, setChildData] = useState(new Date().getMilliseconds());
    const parentDataInChild = props.dataFromParent;

    const sendDataToParent = () => {
        console.log('data sent from child to parent');
        props.dataFromChild(childData);
    }

    return (
        <div className="container-fluid">
            <div className="container">
                <div>
                    <p className="display-4 text-primary">Child Component</p>
                    <hr />
                    <p>This is Child component.</p>
                    <p>Child data in child component: {childData}  </p>
                    <p>Parent data in child component: {parentDataInChild}  </p>
                    <button onClick={sendDataToParent} >Send Data from Child to Parent</button>
                </div>
            </div>
        </div >
    );
}

export default Child;



// import { useState } from "react";

// const Child = () => {

//     // const [parentDataInChild, setParentDataInChild] = ???; // get data from Parent component
//     const [parentDataInChild, setParentDataInChild] = useState(20);

//     return (
//         <div className="container-fluid">
//             <div className="container">
//                 <div>
//                     <p className="display-4 text-primary">Child Component</p>
//                     <hr />
//                     <p>This is Child component.</p>
//                     <p>Parent data in child component: {parentDataInChild}  </p>
//                 </div>
//             </div>
//         </div >
//     );
// }

// export default Child;

