import { Form, Link } from "@remix-run/react";
import { Button } from "~/components/button";

export default function NewFormRoute() {
  return (
    <>
      <div className="flex mb-4">
        <h1 className="text-3xl font-semibold mr-auto">Novo Formulário</h1>
        <Button as={Link} to="/forms">Todos Formulários</Button>
      </div>
      <div>
        <Form method="post" action="/forms" className="grid grid-cols-6 gap-4">
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

          <Button>
            Salvar
          </Button>
        </Form>
      </div>
    </>
  );
}
