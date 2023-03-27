import { z } from "zod";
import { db } from "~/utils/db.server";
import { schema } from "./schema";

type FormIput = z.infer<typeof schema>;

export function getForms() {
  return db.form.findMany();
}

export function createForm(form: FormIput) {
  return db.form.create({
    data: form,
  });
}
