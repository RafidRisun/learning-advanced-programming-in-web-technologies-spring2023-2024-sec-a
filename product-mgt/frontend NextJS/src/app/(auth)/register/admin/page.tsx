import { useRouter } from "next/router"

export default function Register() {
  const router = useRouter();

  const login = () => {
    router.push("/login/admin");
  }

  return (
    <div>
        <h1>Admin Registration Page</h1><br/>
        <h3>Admin Name:</h3>
        <input type="text" id="username"></input><br/>
        <h3>Password</h3>
        <input type="password" id="password"></input><br/>
        <h3>Confirm Password</h3>
        <input type="password" id="password"></input><br/>
        <input type="button" onClick={login}>Register</input><br/>
        <input type="register" onClick={login}>Login</input>
    </div>
  )
}
