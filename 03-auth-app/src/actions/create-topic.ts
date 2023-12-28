"use server";
import { auth } from "@/auth";
import z from "zod";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: `Must be a string letters or dashes without spaces`,
    }),
  description: z.string().min(20).max(50),
});

export interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
}

export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  const session = await auth();
  const name = formData.get("name");
  const description = formData.get("description");

  const result = createTopicSchema.safeParse({
    name: name,
    description: description,
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  // Form validation
  if (!session || session?.user) {
    return {
        errors: {
            _form: ['You must be signed in to create topic'],
        }
    }
  }

  // revalidate homepage

  return {
    errors: {},
  };
}
