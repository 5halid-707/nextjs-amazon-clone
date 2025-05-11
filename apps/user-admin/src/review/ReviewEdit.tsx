import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { IsAdminTitle } from "../isAdmin/IsAdminTitle";

export const ReviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="rating" source="rating" />
        <ReferenceInput source="user.id" reference="IsAdmin" label="user">
          <SelectInput optionText={IsAdminTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
