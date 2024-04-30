import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const userRegister = () => {
    router.push("/register/user");
  };

  const userLogin = () => {
    router.push("/login/user");
  };

  const adminRegister = () => {
    router.push("/register/admin");
  };

  const adminLogin = () => {
    router.push("/login/admin");
  };

  return (
    <div>
      <button onClick={userRegister}>User Register</button>
      <button onClick={userLogin}>User Login</button>
      <button onClick={adminRegister}>Admin Register</button>
      <button onClick={adminLogin}>Admin Login</button>
    </div>
  );
}
