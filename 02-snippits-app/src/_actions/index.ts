'use server'

import { db } from "@/db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function editSnippet(id: number, code: string) {
    await db.snippit.update({
        where: {id: id},
        data: {
            code: code
        }
    });

    revalidatePath(`/snippets/${id}`);
    redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
    await db.snippit.delete({
        where: {
            id: id
        }
    });
    // Re-fetch page with updated cache to reflect the deleted snippet
    revalidatePath('/snippets');
    redirect(`/snippets`);
}

export async function createSnippet(
    formState: { message: string },
    formData: FormData
  ) {

    // Check the user's inputs and make sure they're valid
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;
  

    if (title.length < 5) {
        return { message: 'Title must be longer than 5' }
    }
    if (code.length < 5) {
        return { message: 'Code must be longer than 5' }
    }

    // Create a new record in the database
     await db.snippit.create({
      data: {
        title,
        code,
      },
    });
  
    revalidatePath('/snippets');

    redirect('/snippets');
  }