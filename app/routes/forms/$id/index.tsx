import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";
import { Select } from "~/components/form";
import { Button } from "~/components/button";
import { Form } from "~/form";
import { formQuestionSchema } from "~/features/Forms";

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
        <Button as={Link} to="/forms">
          Voltar
        </Button>
      </div>
      <div>
        <h2 className="text-2xl">Perguntas</h2>
        {form.questions.map((question) => (
          <p key={question.id}>{question.title}</p>
        ))}

        <Form
          schema={formQuestionSchema}
          action={`/forms/${form.id}/questions`}
          method="post"
          className="grid grid-cols-6 gap-4"
        >
          {({ Field }) => (
            <>
              <div className="col-span-6">
                <Field name="title">
                  {({ Label, Input, Error: FieldError }) => (
                    <>
                      <Label className="block text-xs font-medium text-gray-700" />

                      <Input className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" />

                      <FieldError />
                    </>
                  )}
                </Field>
              </div>

              <div className="col-span-6">
                <Select name="type" label="Type" id="type">
                  <option value="ALTERNATIVE">Alternativa</option>
                  <option value="TEXT">Texto</option>
                </Select>
              </div>

              <Button>Salvar</Button>
            </>
          )}
        </Form>
      </div>
    </>
  );
}
