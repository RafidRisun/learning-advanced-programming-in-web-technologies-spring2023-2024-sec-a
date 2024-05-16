import React, { useState } from "react";
interface FormData{
    employerName: string;
    password: string;
}

export default function EmployerLogin() {
    const [formData, setFormData] = useState<FormData>({employerName: '', password: '' });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const formDataObject = new FormData();
            formDataObject.append('employerName', formData.employerName);
            formDataObject.append('description', formData.password);
            const response = await axios.post(`http://localhost:3000/employee/login`, formDataObject, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (error) {
            toast.error('Failed to send :(');
        }
    };
    return ( 
      <html>
        <form onSubmit={handleSubmit}>
        <table>
            <tr>
                <td>
                    Employer Name: 
                </td>
                <td>
                    <input type="text" id="employerName" name="employerName" onChange={(e) => setFormData(prevState => ({ ...prevState, employerName: e.target.value }))}/>
                </td>
            </tr>
            <tr>
                <td>
                    Password: 
                </td>
                <td>
                    <input type="text" id="password" name="password" onChange={(e) => setFormData(prevState => ({ ...prevState, password: e.target.value }))}/>
                </td>
            </tr>
        </table>  
        </form>
        
      </html>
     );
  }
  