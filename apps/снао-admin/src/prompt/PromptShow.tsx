import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { DVACHPOST_TITLE_FIELD } from "../dvachPost/DvachPostTitle";

export const PromptShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
