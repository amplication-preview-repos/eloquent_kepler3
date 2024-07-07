/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NeuralNetResponseWhereUniqueInput } from "./NeuralNetResponseWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { NeuralNetResponseUpdateInput } from "./NeuralNetResponseUpdateInput";

@ArgsType()
class UpdateNeuralNetResponseArgs {
  @ApiProperty({
    required: true,
    type: () => NeuralNetResponseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NeuralNetResponseWhereUniqueInput)
  @Field(() => NeuralNetResponseWhereUniqueInput, { nullable: false })
  where!: NeuralNetResponseWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => NeuralNetResponseUpdateInput,
  })
  @ValidateNested()
  @Type(() => NeuralNetResponseUpdateInput)
  @Field(() => NeuralNetResponseUpdateInput, { nullable: false })
  data!: NeuralNetResponseUpdateInput;
}

export { UpdateNeuralNetResponseArgs as UpdateNeuralNetResponseArgs };
