import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CardTitle } from "../card/CardTitle";
import { StoreTitle } from "../store/StoreTitle";

export const TemplateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="cards"
          reference="Card"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CardTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <div />
        <ReferenceInput source="store.id" reference="Store" label="Store">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
