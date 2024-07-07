import { Module } from "@nestjs/common";
import { NeuralNetResponseModuleBase } from "./base/neuralNetResponse.module.base";
import { NeuralNetResponseService } from "./neuralNetResponse.service";
import { NeuralNetResponseController } from "./neuralNetResponse.controller";
import { NeuralNetResponseResolver } from "./neuralNetResponse.resolver";

@Module({
  imports: [NeuralNetResponseModuleBase],
  controllers: [NeuralNetResponseController],
  providers: [NeuralNetResponseService, NeuralNetResponseResolver],
  exports: [NeuralNetResponseService],
})
export class NeuralNetResponseModule {}
