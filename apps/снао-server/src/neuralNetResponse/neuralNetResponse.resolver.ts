import * as graphql from "@nestjs/graphql";
import { NeuralNetResponseResolverBase } from "./base/neuralNetResponse.resolver.base";
import { NeuralNetResponse } from "./base/NeuralNetResponse";
import { NeuralNetResponseService } from "./neuralNetResponse.service";

@graphql.Resolver(() => NeuralNetResponse)
export class NeuralNetResponseResolver extends NeuralNetResponseResolverBase {
  constructor(protected readonly service: NeuralNetResponseService) {
    super(service);
  }
}
