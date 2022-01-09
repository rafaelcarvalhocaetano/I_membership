import React, { createContext, useEffect, useState } from 'react';
import { User } from '../models/User';
import UserService from '../service/UserService';

import { IUserContext } from './IUseContext';
import { IResponse } from "../models/Response";

const service = new UserService();


export const UseContext = createContext<IUserContext>({
  users: {},
  createUser: (form: User) => {},
  findFilterUser: (page: number, limit: number): void => {},
  deleteUser: (id: string): void => {}
});

const UserProvider = ({children}: any) => {


  const [users, setUser] = useState<IResponse>({
    next: {
      page: 0,
      limit: 0
    },
    peyloader: [],
    previous: {
      page: 0,
      limit: 0
    },
    total_page: null
  });

  useEffect(() => {
    findFilterUser(1, 20);
  }, []);

  const findFilterUser = async (page: number, limit: number) => {
    const x = await service.api.get(`/user`,{params: {page, limit}});
    setUser(x.data);
  }

  const createUser = (form: User) => service.api.post('/user', form);

  const deleteUser = async (id: string) => {
    const userDelete = await service.api.delete(`/user/${id}`);
    setUser({...users, peyloader: users?.peyloader.filter((x: any) => x._id !== userDelete.data._id)})
  }

  return(<UseContext.Provider value={{ users, findFilterUser, createUser, deleteUser }}>{children}</UseContext.Provider>);
  
}

export default UserProvider;