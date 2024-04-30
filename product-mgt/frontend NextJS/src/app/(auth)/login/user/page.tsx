import { useRouter } from "next/router"

export default function UserLogin() {
  const router = useRouter();

  const dash = () => {
    router.push("/dashboard/user");
  }

  const reg = () => {
    router.push("/register");
  }

  return (
    <div>
        <h1>User Login Page</h1><br/>
        <h3>User Name:</h3>
        <input type="text" id="username"></input><br/>
        <h3>Password</h3>
        <input type="password" id="password"></input><br/>
        <input type="button" onClick={dash}>Login</input><br/>
        <input type="register" onClick={reg}>Register</input>
    </div>
  )
}
