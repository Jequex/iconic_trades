import { useContext } from "react";
// import Image from "next/image";
import { Inter } from "next/font/google";
import Guest from "@/components/users sessions/Guest";
import AuthUser from "@/components/users sessions/AuthUser";
import AuthContext from "@/context/auth/authContext";
// import { useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const authContext = useContext(AuthContext);

  const { isAuthenticated } = authContext;
  // const { data: session } = useSession();
  // console.log(session);

  return (
    <main className=" min-h-screen  mx-auto ">
      {isAuthenticated ? <AuthUser /> : <Guest />}
      {/* <AuthUser />  */}
    </main>
  );
}
