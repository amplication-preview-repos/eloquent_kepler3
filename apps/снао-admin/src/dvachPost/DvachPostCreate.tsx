import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { NeuralNetResponseTitle } from "../neuralNetResponse/NeuralNetResponseTitle";
import { PromptTitle } from "../prompt/PromptTitle";

export const DvachPostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="content" multiline source="content" />
        <ReferenceArrayInput
          source="neuralNetResponses"
          reference="NeuralNetResponse"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NeuralNetResponseTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="timestamp" source="timestamp" />
        <ReferenceArrayInput
          source="prompts"
          reference="Prompt"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PromptTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
