import { Module } from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";
import {AuthorsModule} from "./authors/authors.module";

@Module({
  imports: [
    AuthorsModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql']
    })
  ],
})
export class AppModule {}
