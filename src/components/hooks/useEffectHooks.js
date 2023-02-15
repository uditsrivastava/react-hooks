import React, {useState, useEffect} from "react";

const UseEffectHooks  = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            return count >= 5 ? count : setCount(count + 1)
        }, 1000)
    }, [count])

    return (
        <>
            <h1>useEffect Hook</h1>
            <div>Count is {count}</div>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </>
    )

}

export default UseEffectHooks;