import React, { useState } from "react";

const UseStateHooks = () => {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        return count >= 10 ? count : setCount(count + 1)
    }

    const decrementCount = () => {
        return count <= 0 ? count : setCount(count - 1)
    }

    return (
        <>
            <h1>useState Hook</h1>
            <div>Count is {count}</div>
            <button onClick={incrementCount}>Increment Count</button>
            <button onClick={decrementCount}>Decrement Count</button>
        </>
    )
}

export default UseStateHooks;