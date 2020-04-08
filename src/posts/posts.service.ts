import { Injectable } from '@nestjs/common';
import {Post} from "../graphql.schema";

@Injectable()
export class PostsService {
  findAll(props: {authorId: number}): Post[] {
    return [{
      id: 0,
      title: 'brabra',
      votes: 0
    }]
  }
}