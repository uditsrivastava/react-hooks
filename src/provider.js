import React, { useState } from "react";
import PackageContext from './context'

const Provider  = (props) => {
    const [text, setText] = useState({
        name: "React",
        description: "Very Lovely Language"
    });

    return (
        <PackageContext.Provider value={{
            data: text
        }}>
            {props.children}
        </PackageContext.Provider>
    )

}

export default Provider;