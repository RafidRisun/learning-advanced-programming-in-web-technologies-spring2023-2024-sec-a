import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter();

  const admin = () => {
    router.push("/admin");
  }

  const user = () => {
    router.push("/user");
  }
  return 
}
