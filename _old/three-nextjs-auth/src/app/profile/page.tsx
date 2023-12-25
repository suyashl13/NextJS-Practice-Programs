"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState<any>("No Data");

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me", {
      withCredentials: true,
    });

    setData(res.data.data);
  };

  const onLogout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logged out Successfully");
      router.push("/login");
    } catch (error: any) {
      console.log("Something went wrong");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-xl text-bold">Profile Page</h1>
      <p>{ data._id ? <Link href={ data._id ? '/profile/' + data._id : '/profile' }>Profile Slug</Link> : ''}</p>
      <button
        onClick={onLogout}
        className="btn p-2 rounded-md mt-4 bg-blue-500 text-white"
      >
        Logout
      </button>

      <button
        onClick={getUserDetails}
        className="btn p-2 rounded-md mt-4 bg-blue-500 text-white"
      >
        Get User Details
      </button>
    </div>
  );
}
