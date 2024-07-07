import * as graphql from "@nestjs/graphql";
import { DvachPostResolverBase } from "./base/dvachPost.resolver.base";
import { DvachPost } from "./base/DvachPost";
import { DvachPostService } from "./dvachPost.service";

@graphql.Resolver(() => DvachPost)
export class DvachPostResolver extends DvachPostResolverBase {
  constructor(protected readonly service: DvachPostService) {
    super(service);
  }
}
