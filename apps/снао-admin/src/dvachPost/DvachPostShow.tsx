import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DVACHPOST_TITLE_FIELD } from "./DvachPostTitle";

export const DvachPostShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="author" source="author" />
        <TextField label="content" source="content" />
        <TextField label="timestamp" source="timestamp" />
        <ReferenceManyField
          reference="NeuralNetResponse"
          target="dvachPostId"
          label="NeuralNetResponses"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="timestamp" source="timestamp" />
            <TextField label="content" source="content" />
            <ReferenceField
              label="DvachPost"
              source="dvachpost.id"
              reference="DvachPost"
            >
              <TextField source={DVACHPOST_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Prompt"
          target="dvachPostId"
          label="Prompts"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="content" source="content" />
            <TextField label="timestamp" source="timestamp" />
            <ReferenceField
              label="DvachPost"
              source="dvachpost.id"
              reference="DvachPost"
            >
              <TextField source={DVACHPOST_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
