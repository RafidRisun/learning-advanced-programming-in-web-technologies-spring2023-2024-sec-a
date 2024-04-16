//import { useState } from "react";
//import Applicant from "./Applicant";
import Applicant from "./applicant";
import Education from "./education";
import TechSkill from "./techSkill";
import SoftSkill from "./softSkill";
import About from "./about";

function CV(){
    const tskill = ['c++', 'java', 'c#', 'python', 'html', 'css', 'php', 'javascript', 'typescript', 'nestJs', 'react', 'nextJs'];
    const softSkills = ['Hard Worker', 'Team Worker', 'Can work under pressure', 'Punctual'];
    // const [count, setCount] = useState(0);
    
    // function addCount(){
    //     setCount(count+1);
    // }

    // function reduceCount(){
    //     setCount(count-1);
    // }

    // const testAlert = (item: string)=>{
    //     alert(item);
    // }

    return(
        <>
            <div>
                {/* {   
                    std.map((item)=>(
                        <Applicant key={item} name={item} age={1} email="alamin@aiub.edu">
                            <h3>CGPA</h3>
                        </Applicant>
                    ))
                } */}
                {/* <button onClick={addCount}> + </button>
                <h2>{count}</h2>
                <button onClick={reduceCount}> - </button> */}

                <table>
                    <tr>
                        <td>
                        <tr><Applicant name="Rafid Hassan Risun" age={24} email="rafid@gmail.com" phone="01671048227"></Applicant></tr>
                        <tr><About bio='Experienced programmer skilled in C++, Java, Java Script. Thrives in collaborative environments, adept at problem-solving and committed to continuous learning.'></About></tr></td>
                        <td>
                        <h1>Technical Skills:</h1>
                    {
                    tskill.map((item)=>(
                        <TechSkill key={item} name={item}></TechSkill>
                    ))
                    }</td></tr>
                <tr>
                    <td>
                    <Education>
                    <h1>Educational Qualifications:</h1>
                    <table>
                        <tr>
                            <td>
                                <h2>Level</h2>
                            </td>
                            <td>
                                <h2>Institution</h2>
                            </td>
                            <td>
                                <h3>CGPA/GPA</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                SSC
                            </td>
                            <td>
                                Ideal School and College
                            </td>
                            <td>
                                5.00
                            </td>
                        </tr>
                        <tr>
                            <td>
                                HSC
                            </td>
                            <td>
                                Dhaka City College
                            </td>
                            <td>
                                5.00
                            </td>
                        </tr>

                        <tr>
                            <td>
                                BSc
                            </td>
                            <td>
                                American International University Bangladesh
                            </td>
                            <td>
                                3.77
                            </td>
                        </tr>
                    </table>
                </Education>
                    </td>
                    <td>
                    <h1>Soft Skills:</h1>
                    {
                    softSkills.map((item)=>(
                        <SoftSkill key={item} name={item}></SoftSkill>
                    ))
                    }
                    </td>
                </tr>
                </table>
                
                

            </div>
        </>
    )
}

export default CV;