import { json } from "@remix-run/node";
import { Button } from "~/components/button";
import { db } from "~/utils/db.server";
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

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
                <Button to="/forms">Voltar</Button>
            </div>
            <div>
                {form.questions.map((question) => (
                    <p>{question.title}</p>
                ))}
            </div>
        </>
    );
}