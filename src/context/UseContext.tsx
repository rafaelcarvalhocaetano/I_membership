import { User } from '../models/User';

export interface UserContext {
  users: User[];
  createUser(title: string): void;
  updateUser(todo: User): void;
  removeUser(todo: User): void;
}