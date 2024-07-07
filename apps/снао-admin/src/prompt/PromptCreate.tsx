import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DvachPostTitle } from "../dvachPost/DvachPostTitle";

export const PromptCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="timestamp" source="timestamp" />
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
