import type { QuestionType } from "@prisma/client";
import type { ActionArgs } from "@remix-run/node";
import { redirect } from "react-router";
import { db } from "~/utils/db.server";

export async function action({ request, params }: ActionArgs) {
  const body = await request.formData();
  await db.question.create({
    data: {
      title: body.get("title") as string,
      formId: params.id as string,
      type: body.get("type") as QuestionType,
    },
  });
  return redirect(`/forms/${params.id}`);
}
