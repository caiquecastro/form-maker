import { ActionArgs, json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Button } from "~/components/button";
import { db } from "~/utils/db.server";

export const loader = async () => {
  return json({
    forms: await db.form.findMany(),
  });
};

export async function action({ request }: ActionArgs) {
  const body = await request.formData();
  const form = await db.form.create({
    data: {
      title: body.get("title") as string,
    },
  });
  return redirect(`/forms/${form.id}`);
}

export default function FormsRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <div className="flex">
        <h1 className="text-3xl mr-auto">Formulários</h1>
        <Button to="/forms/new">Novo Formulário</Button>
      </div>
      <div>
        {data.forms.map((form) => (
          <div>
            {form.id}
          </div>
        ))}
      </div>
    </>
  );
}
