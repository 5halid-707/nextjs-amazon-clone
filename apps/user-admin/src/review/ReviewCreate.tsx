import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { IsAdminTitle } from "../isAdmin/IsAdminTitle";

export const ReviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="rating" source="rating" />
        <ReferenceInput source="user.id" reference="IsAdmin" label="user">
          <SelectInput optionText={IsAdminTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
