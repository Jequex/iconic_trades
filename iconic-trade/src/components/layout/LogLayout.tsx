import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { auth_url } from "../utils/utils";

type Props = {
  children: React.ReactNode;
};

function LogLayout({ children }: Props) {
  const { data: session } = useSession();

  const postRequest = async (userSession: any) => {
    try {
      const response = await fetch(
        "https://iconic-trades-backend.herokuapp.com/api/v1/users/googleAuth",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userSession),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const authToken = data.authToken;
        localStorage.setItem("sign in token", authToken);
      } else {
        console.error("Error during sign up:", response);
      }
    } catch (error) {
      console.error("Error during sign up:", error);
    }
  };

  async function googleSignIn() {
    signIn("google", { callbackUrl: auth_url });
    postRequest(session);
  }
  return (
    <div className="h-screen w-full flex items-center justify-center mx-auto p-4 flex-col relative">
      <div className="w-full max-w-md">
        <button
          onClick={googleSignIn}
          type="button"
          className="w-full  text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
        >
          <svg
            className="w-4 h-4 mr-2 -ml-1"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Sign in with Google
        </button>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
            or
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

export default LogLayout;
