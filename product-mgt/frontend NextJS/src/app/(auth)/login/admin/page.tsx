import { useRouter } from "next/router"

export default function AdminLogin() {
  const router = useRouter();

  const admin = () => {
    router.push("/admin");
  }

  return (
    <div>
        <h1>Admin Login Page</h1><br/>
        <h3>User Name:</h3>
        <input type="text" id="username"></input><br/>
        <h3>Password</h3>
        <input type="password" id="password"></input><br/>
        <input type="button" onClick={admin}>Login</input>
    </div>
  )
}
