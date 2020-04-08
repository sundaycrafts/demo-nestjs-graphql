import {AuthorsResolver} from "./authors.resolvers";
import {Module} from "@nestjs/common";
import {PostsModule} from "../posts/posts.module";
import {AuthorsService} from "./authors.service";

@Module({
  imports: [PostsModule],
  providers: [AuthorsService, AuthorsResolver],
})
export class AuthorsModule {}