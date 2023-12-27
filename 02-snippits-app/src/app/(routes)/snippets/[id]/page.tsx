import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import * as actions from '@/_actions'

export default async function SnippetSlug(props: { params: { id: string } }) {
  const {
    params: { id },
  } = props;

  const snippet = await db.snippit.findFirst({
    where: { id: parseInt(id) },
  });

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = actions.deleteSnippet.bind(null, parseInt(id));

  return (
    <center>
      <div className="container">
        <div className="sm:mx-10 lg:mx-40">
          <p className="text-2xl mt-10 text-start ">Create Snippet</p>
          <div className="border rounded-md p-3 mt-3">
          <div className="grid grid-cols-2 grid-rows-1">
            <p className="text-start text-lg font-semibold">Title</p>
            <div className="flex flex-col">
              <p
                className="p-2 mt-1 text-start bg-gray-100 border border-stone-200 rounded-md"
              >{snippet.title}</p>
            </div>
            <div className="bg-none"></div>
          </div>
          <hr className="mt-2" />
          <div className="grid grid-cols-2 grid-rows-1 mt-2">
            <p className="text-start text-lg font-semibold">Code Snippet</p>
            <div className="flex flex-col">
              <textarea
                name="code"
                value={snippet.code}
                readOnly
                className="p-2 font-mono bg-gray-100 h-[20rem] mt-1 border border-stone-200 rounded-md"
              />
            </div>
            <div className="bg-none"></div>
          </div>
          <hr className="my-4" />
          <div className="flex space-x-1 justify-end">
              <Link href={`/snippets/edit/${id}`} className="bg-purple-500 text-white p-1 px-3 active:shadow-sm active:bg-purple-700 active:text-stale-500 rounded-md">Edit</Link>
            <form action={deleteSnippetAction}>
              <button className="bg-purple-500 text-white p-1 px-3 active:shadow-sm active:bg-purple-700 active:text-stale-500 rounded-md">
                Delete
              </button>
            </form>
          </div>
          </div>
        </div>
      </div>
    </center>
  );
}


export async function generateStaticParams() {
  const snippets = await db.snippit.findMany({});

  return snippets.map((val) => ({
    id: val.id.toString(),
  }))
}