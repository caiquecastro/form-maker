import { Link } from "@remix-run/react";
import { Button } from "~/components/button";
import { formSchema } from "~/features/Forms";
import { Form } from "~/form";

export default function NewFormRoute() {
  return (
    <>
      <div className="flex mb-4">
        <h1 className="text-3xl font-semibold mr-auto">Novo Formulário</h1>
        <Button as={Link} to="/forms">
          Todos Formulários
        </Button>
      </div>
      <div>
        <Form
          schema={formSchema}
          method="post"
          action="/forms"
          className="grid grid-cols-6 gap-4"
        >
          {({ Field, Errors }) => (
            <>
              <Field name="title" className="col-span-6">
                {({ Label, Input, Error: FieldError }) => (
                  <>
                    <Label className="block text-xs font-medium text-gray-700" />

                    <Input className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" />

                    <FieldError className="text-red-700 mt-1 p-1 text-sm" />
                  </>
                )}
              </Field>

              <Errors />

              <Button>Salvar</Button>
            </>
          )}
        </Form>
      </div>
    </>
  );
}
