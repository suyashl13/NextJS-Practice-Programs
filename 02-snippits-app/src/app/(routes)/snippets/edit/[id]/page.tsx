import SnippetEditForm from "@/app/_components/SnippetEditForm";
import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";

export default async function SnippetEditPage(props: {
  params: { id: string };
}) {
  const {
    params: { id },
  } = props;
  
  const snippet = await db.snippit.findFirst({ where: { id: parseInt(id) } });

  if (!snippet) {
    return notFound();
  }
  return <center>
    <div className="container">
      <p className="text-2xl mt-10 text-start ">Edit Snippet #{id}</p>
      <SnippetEditForm snippet={snippet} />
    </div>
  </center>;
}

