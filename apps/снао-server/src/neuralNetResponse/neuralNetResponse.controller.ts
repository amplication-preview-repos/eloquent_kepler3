import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NeuralNetResponseService } from "./neuralNetResponse.service";
import { NeuralNetResponseControllerBase } from "./base/neuralNetResponse.controller.base";

@swagger.ApiTags("neuralNetResponses")
@common.Controller("neuralNetResponses")
export class NeuralNetResponseController extends NeuralNetResponseControllerBase {
  constructor(protected readonly service: NeuralNetResponseService) {
    super(service);
  }
}
