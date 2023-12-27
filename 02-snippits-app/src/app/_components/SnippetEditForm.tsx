"use client";

import { Editor } from "@monaco-editor/react";
import { Snippit } from "@prisma/client";
import React, { useState } from "react";
import * as actions from '@/_actions'

export default function SnippetEditForm({ snippet }: { snippet: Snippit }) {
  function handleEditorChange(value: string = '') {
    setCode(value);
  }
  const [code, setCode] = useState(snippet.code)
  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <div className="flex justify-start flex-col mt-3">
      <Editor
        height="40vh"
        theme="vs-dark"
        options={{ minimap: { enabled: false } }}
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction} className="mt-4 justify-end">
        <button  className="bg-purple-500 text-white p-1 px-3 active:shadow-sm active:bg-purple-700 active:text-stale-500 rounded-md" type="submit">Edit Form</button>
      </form>
    </div>
  );
}
