import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { StoreTitle } from "../store/StoreTitle";

export const StaffEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <ReferenceInput source="store.id" reference="Store" label="Store">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
