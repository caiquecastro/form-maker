import { json } from "@remix-run/node";
import type { ActionArgs } from "@remix-run/node";
import { makeDomainFunction } from "domain-functions";
import { Link, useLoaderData } from "@remix-run/react";
import { Button } from "~/components/button";
import { Table, Tbody, Td, Th } from "~/components/table";
import { createForm, getForms, schema } from "~/features/Forms";
import { formAction } from "~/form-action.server";

const mutation = makeDomainFunction(schema)(
  async (data) => await createForm(data)
);

export const loader = async () => {
  return json({
    forms: await getForms(),
  });
};

export const action = async ({ request }: ActionArgs) =>
  formAction({
    request,
    schema,
    mutation,
    successPath: (form) => `/forms/${form.id}`,
  });

export default function FormsRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <div className="flex">
        <h1 className="text-3xl mr-auto">Formulários</h1>
        <Button as={Link} to="/forms/new">
          Novo Formulário
        </Button>
      </div>
      <div>
        <div className="overflow-x-auto">
          <Table>
            <thead>
              <tr>
                <Th>Título</Th>
                <Th>Data de criação</Th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <Tbody>
              {data.forms.map((form) => (
                <tr key={form.id}>
                  <Td highlight>{form.title}</Td>
                  <Td>{form.createdAt}</Td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <Link
                      to={`/forms/${form.id}`}
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </Tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
