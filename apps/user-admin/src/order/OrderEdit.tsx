import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { IsAdminTitle } from "../isAdmin/IsAdminTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
