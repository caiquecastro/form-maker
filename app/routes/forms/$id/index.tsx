import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";
import { Button } from "~/components/button";
import { QuestionsForm } from "~/features/Forms/QuestionsForm";

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

        <QuestionsForm formId={form.id} />
      </div>
    </>
  );
}
