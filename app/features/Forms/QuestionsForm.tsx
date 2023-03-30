import { Form } from "~/form";
import { Input, Select } from "~/components/form";
import { Button } from "~/components/button";
import { formQuestionSchema } from "./schema";

type Props = {
  formId: string;
};

export const QuestionsForm: React.FC<Props> = ({ formId }) => {
  return (
    <Form
      schema={formQuestionSchema}
      action={`/forms/${formId}/questions`}
      method="post"
      className="grid grid-cols-6 gap-4"
    >
      {({ Field, register }) => (
        <>
          <div className="col-span-6">
            <Field name="title">
              {({ Label, Error: FieldError }) => (
                <>
                  <Label className="block text-xs font-medium text-gray-700" />

                  <Input {...register("title")} />

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
  );
};
