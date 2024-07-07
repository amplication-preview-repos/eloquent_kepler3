import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DvachPostServiceBase } from "./base/dvachPost.service.base";

@Injectable()
export class DvachPostService extends DvachPostServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
