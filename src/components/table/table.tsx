import React, { useEffect, useState } from 'react';
import { IResponse } from '../../models/Response';

import UserService from '../../service/UserService';

import ActionPage from './action-page/ActionPage';
import TableBody from './table-body/table-body';
import TableHeader from './table-header/table-header';

import './table.scss';
const service = new UserService();

const TableCustomer = () => {

  const [user, setUser] = useState<IResponse>();

  const getUser = async (page: number) => {
    const x = await service.api.get(`/user`,{params: {page, limit: 20}});
    setUser(x.data)
  }

  
  useEffect(() => {
    getUser(1)
  }, [])

  const handlePage = (data: number) => getUser(data);

  return(
    <>
      <div className="container">
        <table className="customers">
          <TableHeader />
          {user?.peyloader ? <TableBody listUser={user?.peyloader} /> : null}
        </table>
      </div>
      <ActionPage totaPage={user?.total_page} onNextChange={handlePage} />
    </>
  );

}

export default TableCustomer;