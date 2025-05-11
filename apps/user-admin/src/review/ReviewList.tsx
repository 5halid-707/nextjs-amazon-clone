import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ISADMIN_TITLE_FIELD } from "../isAdmin/IsAdminTitle";

export const ReviewList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"reviews"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="rating" source="rating" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="isadmin.id" reference="IsAdmin">
          <TextField source={ISADMIN_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
