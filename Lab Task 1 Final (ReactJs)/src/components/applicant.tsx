//import { ReactNode } from "react";

interface Props{
    name: string,
    age: number,
    email: string,
    phone: string
    //myfunc: (item: string) => void
    //children: ReactNode
}

function Applicant ({name, age, email, phone}: Props){

    return(
        <>
            <div>
                <h1>Applicant:</h1>
                <table>
                    <tr>
                        <td>
                            <h2>Name: {name}</h2>
                            <h2>Age: {age}</h2>
                            <h2>Email: {email}</h2>
                            <h2>Phone: {phone}</h2>
                        </td>
                        <td>
                            <img src='src/assets/photos/399166910_3378542555720924_1336706199528434824_n.jpg' height={300} width={300}></img>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Applicant;