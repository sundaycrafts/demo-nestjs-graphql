import {Module} from "@nestjs/common";
import {PostsService} from "./posts.service";

@Module({
  imports: [],
  providers: [PostsService],
  exports: [PostsService]
})
export class PostsModule {}