import {Args, Parent, Query, ResolveField, Resolver} from "@nestjs/graphql";
import {AuthorsService} from "./authors.service";
import {PostsService} from "../posts/posts.service";

@Resolver('Author')
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query('author')
  async getAuthor(@Args('id') id: number) {
    return this.authorsService.findOneById(id);
  }

  @ResolveField('posts')
  async getPosts(@Parent() author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }
}