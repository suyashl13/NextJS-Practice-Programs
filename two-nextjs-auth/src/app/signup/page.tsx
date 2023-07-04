"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {
    try {
       setIsLoading(true);
       const res = await axios.post('/api/users/signup', user);
       console.log(res.data);
       router.push('/login');
    } catch (error: any) {
      console.log("Signup Failed ", error.message)
      toast.error('Sometihing went wrong.');
    }
  };
 
  const [isLoading, setIsLoading] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(false);

  React.useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }

    return () => {};
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="mb-4">{isLoading ? "Loading" : "Signup"}</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        value={user.username}
        placeholder="username"
        className="p-2 border border-grey-300 rounded-lg mb-4 focus:outline-node focus:border-grey-600"
        onChange={(e) => {
          setUser({ ...user, username: e.target.value });
        }}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        value={user.email}
        placeholder="email"
        className="p-2 border border-grey-300 rounded-lg mb-4 focus:outline-node focus:border-grey-600"
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
      />
      <label htmlFor="email">Password</label>
      <input
        id="password"
        type="text"
        value={user.password}
        placeholder="password"
        className="p-2 border border-grey-300 rounded-lg mb-4 focus:outline-node focus:border-grey-600"
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
      />
      <button
        onClick={onSignup}
        className="p-2 rounded-md  border border-gray-300 focus:outline-none focus:border-blue-600"
      >
        {isDisabled ? "Invalid" : "Signup"}
      </button>
      <Link href={"/login"} className="mt-8">
        Visit Login Page
      </Link>
    </div>
  );
}
