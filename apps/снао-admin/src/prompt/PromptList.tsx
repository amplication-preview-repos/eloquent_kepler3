import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DVACHPOST_TITLE_FIELD } from "../dvachPost/DvachPostTitle";

export const PromptList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Prompts"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
