import { createContext, useEffect, useState } from 'react';
import { User } from '../models/User';
import UserService from '../service/UserService';

import { UserContext } from './UseContext';

export const Store = createContext<UserContext>({
  users: [],
  createUser: () => {},
  updateUser: () => {},
  removeUser: () => {}
});

const UserProvider = (props: any) => {
  const service = new UserService();

  const [user, setUser] = useState<User[]>();

  useEffect(() => {
  }, [user]);

  const createUser = (data: User) => {
  }
}