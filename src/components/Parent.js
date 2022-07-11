import { useState } from "react";
import Child from './Child';

const Parent = () => {

    const [parentData, setParentData] = useState(10);
    const childDataInparent = 0;

    return (
        <div className="container-fluid">
            <div className="container">
                <div>
                    <p className="display-4 text-primary">Parent Component</p>
                    <hr />
                    <p>This is Parent component.</p>
                    <p>Parent data in parent component: {parentData}  </p>
                    <p>Child data in parent component: {childDataInparent}  </p>
                    {/* <Child aatribute={value} /> */}
                    <Child dataFromParent={parentData} />
                </div>
            </div>
        </div >
    );
}

export default Parent;

