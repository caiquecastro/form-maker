import { json } from "@remix-run/node";
import { Button } from "~/components/button";
import { db } from "~/utils/db.server";
import type { LoaderArgs } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";

export const loader = async (args: LoaderArgs) => {
  return json({
    form: await db.form.findUniqueOrThrow({
      where: {
        id: args.params.id,
      },
      include: {
        questions: true,
      },
    }),
  });
};

export default function ShowFormRoute() {
  const { form } = useLoaderData<typeof loader>();

  return (
    <>
      <div className="flex">
        <h1 className="text-3xl mr-auto">Formulário {form.title}</h1>
        <Button as={Link} to="/forms">Voltar</Button>
      </div>
      <div>
        <h2 className="text-2xl">Perguntas</h2>
        {form.questions.map((question) => (
          <p key={question.id}>{question.title}</p>
        ))}

        <Form
          action={`/forms/${form.id}/questions`}
          method="post"
          className="grid grid-cols-6 gap-4"
        >
          <div className="col-span-6">
            <label
              htmlFor="title"
              className="block text-xs font-medium text-gray-700"
            >
              Title
            </label>

            <input
              type="text"
              id="title"
              name="title"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
          </div>

          <div className="col-span-6">
            <label
              htmlFor="type"
              className="block text-xs font-medium text-gray-700"
            >
              Type
            </label>

            <select name="type">
              <option>ALTERNATIVE</option>
              <option>TEXT</option>
            </select>
          </div>

          <Button className="rounded-md bg-teal-600 py-2.5 text-sm text-white transition hover:shadow-lg">
            Salvar
          </Button>
        </Form>
      </div>
    </>
  );
}
