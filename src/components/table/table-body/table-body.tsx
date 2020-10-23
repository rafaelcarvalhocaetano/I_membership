import React from 'react';

import './table-body.scss';

import { User } from '../../../models/User';
import IconUser from '../icon-user/icon-user';

const TableBody = ({listUser}: any) => {
  return (
    <tbody>
      {
        listUser.map((x: User, i: number) => {
          return (
            <tr className="tbl-body" key={i} >
              <td className="data">
                <IconUser user={x}/>
              </td>
              <td className="data"><span>{x.end_date}</span></td>
              <td className="data profits"><span>{x.profits}</span></td>
              <td className="data losses"><span>{x.losses}</span></td>
              <td className="data"><span>{x.phone}</span></td>
            </tr>
          );
        })
      }
    </tbody>
  )
}

export default TableBody;