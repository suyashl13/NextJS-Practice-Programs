'use client'

import React from "react";
import { useFormState } from "react-dom";
import * as actions from "@/_actions";

export default function CreateSnippetPage() {

  const [formState, action] = useFormState(actions.createSnippet, {message: ''});

  return (
    <center>
      <div className="container">
        <div className="sm:mx-10 lg:mx-40">
        <p className="text-2xl mt-10 text-start ">Create Snippet</p>
          <form action={action} className="mt-5 border p-4 border-gray-200 rounded-md shadow">
            <div className="grid grid-cols-2 grid-rows-1">
            <p className="text-start text-lg font-semibold">Title</p>
              <div className="flex flex-col">
                <input name="title" type="text" className="p-2 mt-1  bg-gray-100 border border-stone-200 rounded-md" />
              </div>
              <div className="bg-none"></div>
            </div>
            <hr className="mt-2" />
            <div className="grid grid-cols-2 grid-rows-1 mt-2">
            <p className="text-start text-lg font-semibold">Code Snippet</p>
              <div className="flex flex-col">
                <textarea name='code' className="p-2 font-mono bg-gray-100 h-[20rem] mt-1 border border-stone-200 rounded-md" />
              </div>
              <div className="bg-none"></div>
            </div>
            <hr className="my-4" />
            {
              formState.message ? <p className="text-red-500 px-3 py-2 text-start border-red-300 border bg-red-100 p-1 rounded-md">{formState.message}</p>  : null
            }
            <hr className="my-4" />
            
            <div className="flex justify-end">
              <button className="bg-purple-500 text-white p-1 px-3 active:shadow-sm active:bg-purple-700 active:text-stale-500 rounded-md">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </center>
  );
}
