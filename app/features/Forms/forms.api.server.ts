import { z } from "zod";
import { db } from "~/utils/db.server";
import { formSchema } from "./schema";

type FormIput = z.infer<typeof formSchema>;

export function getForms() {
  return db.form.findMany();
}

export function createForm(form: FormIput) {
  return db.form.create({
    data: form,
  });
}
