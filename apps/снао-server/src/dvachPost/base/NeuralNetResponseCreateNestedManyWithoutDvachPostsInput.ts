/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { NeuralNetResponseWhereUniqueInput } from "../../neuralNetResponse/base/NeuralNetResponseWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class NeuralNetResponseCreateNestedManyWithoutDvachPostsInput {
  @Field(() => [NeuralNetResponseWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [NeuralNetResponseWhereUniqueInput],
  })
  connect?: Array<NeuralNetResponseWhereUniqueInput>;
}

export { NeuralNetResponseCreateNestedManyWithoutDvachPostsInput as NeuralNetResponseCreateNestedManyWithoutDvachPostsInput };
