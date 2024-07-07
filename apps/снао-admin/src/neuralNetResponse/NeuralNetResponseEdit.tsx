import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DvachPostTitle } from "../dvachPost/DvachPostTitle";

export const NeuralNetResponseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
