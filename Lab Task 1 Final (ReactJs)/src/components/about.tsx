//import { ReactNode } from "react";

interface Props{
    bio: string
    //myfunc: (item: string) => void
    //children: ReactNode
}

function About ({bio}: Props){

    return(
        <>
            <div>
                <h1>About Me:</h1>
                <p>{bio}</p>
            </div>
        </>
    )
}

export default About;