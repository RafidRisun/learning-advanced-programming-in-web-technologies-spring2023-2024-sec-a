import { redirect, useRouter } from "next/navigation"

export default function Home(){
  const router = useRouter();

  const reg = () => {
    router.push("/register");
  }

  const upd = () => {
    router.push("/update");
  }

  const del = () => {
    router.push("/delete");
  }

  const ser = () => {
    router.push("/search");
  }
  return (
    <>
    <h1>Welcome to Admin Page</h1>
    <button onClick={reg}>Register Employee</button>
    <button onClick={upd}>Update Employee</button>
    <button onClick={del}>Delete Employee</button>
    <button onClick={ser}>Search Employee</button>
    </>
    
  );
}