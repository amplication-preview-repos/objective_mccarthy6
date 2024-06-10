import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CardTitle } from "../card/CardTitle";
import { StoreTitle } from "../store/StoreTitle";

export const TemplateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
