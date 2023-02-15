import React, {useContext} from "react";
import context from "../../context";

const UseContextHooks = () => {
    const a = useContext(context)

    return (
        <>
        <h1>UseContext Hooks</h1>
        <div>This is my Name {a.data.name}</div>
        <div>This is my Name {a.data.description}</div>
        </>
    )


}

export default UseContextHooks;