import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(1),
});

export const formQuestionSchema = z.object({
  title: z.string().min(1),
});
