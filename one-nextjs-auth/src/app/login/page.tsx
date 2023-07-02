"use client"
import React from "react";
import Link  from "next/link";
import { useRouter } from "next/navigation";
import  axios  from "axios";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="mb-4">Login</h1>
      <hr />
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
      onClick={onLogin}
      className="p-2 rounded-md  border border-gray-300 focus:outline-none focus:border-blue-600">Login Here</button>
      <Link href={'/signup'} className="mt-8">Visit Signup Page</Link>
    </div>
  );
}
