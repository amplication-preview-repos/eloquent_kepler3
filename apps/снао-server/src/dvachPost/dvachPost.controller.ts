import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DvachPostService } from "./dvachPost.service";
import { DvachPostControllerBase } from "./base/dvachPost.controller.base";

@swagger.ApiTags("dvachPosts")
@common.Controller("dvachPosts")
export class DvachPostController extends DvachPostControllerBase {
  constructor(protected readonly service: DvachPostService) {
    super(service);
  }
}
