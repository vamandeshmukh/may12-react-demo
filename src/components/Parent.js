import { useState } from "react";
import Child from './Child';

const Parent = () => {

    const [parentData, setParentData] = useState(10);
    const [childDataInParent, setChildDataInParent] = useState(0);

    const getDataFromChild = (arg) => {
        console.log(arg);
        console.log('data received from child to parent');
        setChildDataInParent(arg);
    }

    return (
        <div className="container-fluid">
            <div className="container">
                <div>
                    <p className="display-4 text-primary py-3">Parent</p>
                    <hr />
                    <p>This is Parent component.</p>
                    <p>Parent data in parent component: {parentData}  </p>
                    <p>Child data in parent component: {childDataInParent}  </p>
                    {/* <Child aatribute={value} /> */}
                    <Child
                        dataFromParent={parentData}
                        dataFromChild={getDataFromChild} />
                </div>
            </div>
        </div >
    );
}

export default Parent;

