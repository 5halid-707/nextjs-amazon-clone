import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { IsAdminTitle } from "../isAdmin/IsAdminTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="isAdmins.id"
          reference="IsAdmin"
          label="isAdmins"
        >
          <SelectInput optionText={IsAdminTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="IsAdmin" label="user">
          <SelectInput optionText={IsAdminTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
