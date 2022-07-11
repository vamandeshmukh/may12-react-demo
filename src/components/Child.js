import { useState } from "react";

const Child = (props) => {

    // const [parentDataInChild, setParentDataInChild] = ???; // get data from Parent component 
    const parentDataInChild = props.dataFromParent;


    
    return (
        <div className="container-fluid">
            <div className="container">
                <div>
                    <p className="display-4 text-primary">Child Component</p>
                    <hr />
                    <p>This is Child component.</p>
                    <p>Parent data in child component: {parentDataInChild}  </p>
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

