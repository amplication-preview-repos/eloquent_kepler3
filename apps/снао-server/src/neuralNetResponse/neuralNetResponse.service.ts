import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NeuralNetResponseServiceBase } from "./base/neuralNetResponse.service.base";

@Injectable()
export class NeuralNetResponseService extends NeuralNetResponseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
