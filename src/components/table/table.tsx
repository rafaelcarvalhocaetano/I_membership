import React, { useContext } from 'react';

import ActionPage from './action-page/ActionPage';
import TableBody from './table-body/table-body';
import TableHeader from './table-header/table-header';

import './table.scss';

import { IUserContext } from '../../context/IUseContext';
import { UseContext } from '../../context/UseContext';

const TableCustomer = () => {

  const { users, findFilterUser } = useContext<IUserContext>(UseContext);

  const getUser = async (page: number) => findFilterUser(page, 20);

  const handlePage = (data: number) => getUser(data);

  return(
    <>
      <div className="container">
        <table className="customers">
          <TableHeader />
          {users?.peyloader ? <TableBody listUser={users?.peyloader} /> : null}
        </table>
      </div>
      <ActionPage totaPage={users?.total_page} onNextChange={handlePage} />
    </>
  );

}

export default TableCustomer;