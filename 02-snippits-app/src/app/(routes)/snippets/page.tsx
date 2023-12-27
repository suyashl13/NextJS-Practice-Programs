import { db } from "@/db";
import { Snippit } from "@prisma/client";
import Link from "next/link";
import React from "react";

export default async function SeeSnippets() {
  const snippets = await db.snippit.findMany();
  const renderedSnippets = snippets.map((val: Snippit, i: number) => (
    <div className="flex border-b py-2 last:border-none" key={i}>
      <p className="font-semibold">
        {val.id}. {val.title}
      </p>
      <Link
        href={`/snippets/${val.id}`}
        className="ml-auto text-sm text-sky-500"
      >
        View
      </Link>
    </div>
  ));
  return (
    <center>
      <div className="container">
        <div className="sm:mx-10 lg:mx-40">
          <p className="font-semibold mb-3 text-2xl mt-10 text-start ">
            See Snippets
          </p>
          <div className="flex flex-col border px-3 py-1 rounded-lg">{renderedSnippets}</div>
        </div>
      </div>
    </center>
  );
}
