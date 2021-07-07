import React, {useEffect, useState} from "react";

function generateData() {
    console.log("generateData")
    return 1;
}

const ExampleUseState = () => {

    const [count, setCount] = useState(generateData);

    console.log("useEffect example");

    useEffect(() => {
        console.log("You are inside useEffect");
        document.title = count.toString();
    }, [count])

    const changer = (state: number) => {

        return state + 1;
    }

    return (
        <div>
            <div>count: {count}</div>
            <button onClick={() => setCount(changer)}>+</button>

        </div>
    );
};

export default ExampleUseState;