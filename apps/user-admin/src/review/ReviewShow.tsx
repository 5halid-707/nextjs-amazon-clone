import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { ISADMIN_TITLE_FIELD } from "../isAdmin/IsAdminTitle";

export const ReviewShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="rating" source="rating" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="isadmin.id" reference="IsAdmin">
          <TextField source={ISADMIN_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
