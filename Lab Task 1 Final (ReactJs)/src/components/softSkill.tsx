//import { ReactNode } from "react";

interface Props{
    name: string
    //myfunc: (item: string) => void
    //children: ReactNode
}

function SoftSkill ({name}: Props){

    return(
        <>
            <div>
                <h2>{name}</h2>
            </div>
        </>
    )
}

export default SoftSkill;