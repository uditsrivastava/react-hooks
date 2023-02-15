import React, { useState, useRef, useEffect } from "react";

const UseRefHooks = () => {

    const [name, setName] = useState("")
    const prevName = useRef();

    useEffect(() => {
        prevName.current = name
    })

    return (
        <>
            <h1>useRef Hooks</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <div>My Current Name is {name} and My Previous Name {prevName.current}</div>
        </>
    )

}

export default UseRefHooks;