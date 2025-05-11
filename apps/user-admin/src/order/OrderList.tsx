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

export const OrderList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"orders"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="isAdmins"
          source="isadmin.id"
          reference="IsAdmin"
        >
          <TextField source={ISADMIN_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="isadmin.id" reference="IsAdmin">
          <TextField source={ISADMIN_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
