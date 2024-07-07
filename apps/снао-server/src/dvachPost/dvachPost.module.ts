import { Module } from "@nestjs/common";
import { DvachPostModuleBase } from "./base/dvachPost.module.base";
import { DvachPostService } from "./dvachPost.service";
import { DvachPostController } from "./dvachPost.controller";
import { DvachPostResolver } from "./dvachPost.resolver";

@Module({
  imports: [DvachPostModuleBase],
  controllers: [DvachPostController],
  providers: [DvachPostService, DvachPostResolver],
  exports: [DvachPostService],
})
export class DvachPostModule {}
