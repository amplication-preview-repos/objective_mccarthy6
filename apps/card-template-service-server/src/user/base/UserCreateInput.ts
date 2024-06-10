/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CardCreateNestedManyWithoutUsersInput } from "./CardCreateNestedManyWithoutUsersInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { StoreCreateNestedManyWithoutUsersInput } from "./StoreCreateNestedManyWithoutUsersInput";
import { EnumUserUserType } from "./EnumUserUserType";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => CardCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CardCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CardCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  cards?: CardCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => StoreCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => StoreCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => StoreCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  stores?: StoreCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: false,
    enum: EnumUserUserType,
  })
  @IsEnum(EnumUserUserType)
  @IsOptional()
  @Field(() => EnumUserUserType, {
    nullable: true,
  })
  userType?: "Option1" | null;
}

export { UserCreateInput as UserCreateInput };
