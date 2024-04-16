//import { ReactNode } from "react";

import { ReactNode } from "react";

interface Props{
    // name: string,
    // year: number,
    // cgpa: string
    //myfunc: (item: string) => void
    children: ReactNode
}

function Education ({children}: Props){

    return(
        <>
            <div>
                {/* <h1>Educational Qualifications:</h1>
                <h2>Name: {name}</h2>
                <h2>ID: {year}</h2>
                <h2>Email: {cgpa}</h2> */}
                {children}
            </div>
        </>
    )
}

export default Education;