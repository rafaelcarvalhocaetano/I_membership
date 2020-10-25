import React, { useContext } from 'react';

import './table-body.scss';

import { User } from '../../../models/User';
import IconUser from '../icon-user/icon-user';
import { IUserContext } from '../../../context/IUseContext';
import { UseContext } from '../../../context/UseContext';

const TableBody = ({listUser}: any) => {
  

  const { deleteUser } = useContext<IUserContext>(UseContext);

  const deleteLine = (id: string) => deleteUser(id);


  return (
    <tbody>
      {
        listUser.map((x: User, i: number) => {
          return (
            <tr className="tbl-body" key={i}>
              <td className="data">
                <IconUser user={x}/>
              </td>
              <td className="data"><span>{x.end_date}</span></td>
              <td className="data profits"><span>{x.profits}</span></td>
              <td className="data losses"><span>{x.losses}</span></td>
              <td className="data">
                <span>{x.phone}</span>
                <button className="btn-delete" onClick={() => deleteLine(x._id)}>Delete</button>
              </td>              
              {/* <button className="btn-delete" onClick={() => deleteLine(x._id)}>Delete</button> */}
            </tr>
          );
        })
      }
    </tbody>
  )

}




export default TableBody;