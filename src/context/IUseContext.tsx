import { IResponse } from "../models/Response";
import { User } from "../models/User";

export interface IUserContext {
  users: any,
  createUser(user: User): void;
  findFilterUser(page: number, limit: number): void;
  deleteUser(id: string): void;
}