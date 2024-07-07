import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DvachPostTitle } from "../dvachPost/DvachPostTitle";

export const NeuralNetResponseCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="content" multiline source="content" />
        <ReferenceInput
          source="dvachPost.id"
          reference="DvachPost"
          label="DvachPost"
        >
          <SelectInput optionText={DvachPostTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
