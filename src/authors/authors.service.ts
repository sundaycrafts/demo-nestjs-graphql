import { Injectable } from '@nestjs/common';
import {Author} from "../graphql.schema";

@Injectable()
export class AuthorsService {
  findOneById (id: number): Author {
    return {
      id: 0,
      firstName: "John",
      lastName: "Due",
    }
  }
}