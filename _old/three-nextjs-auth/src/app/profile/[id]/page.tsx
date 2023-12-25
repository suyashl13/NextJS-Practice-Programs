import React from "react";

export default function ProfileSlug({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl">Profile Slug #<span className="text-bold bg-orange-500 p-2 rounded ml-2 text-black mt-5">{params.id}</span> </h1>
    </div>
  );
}
