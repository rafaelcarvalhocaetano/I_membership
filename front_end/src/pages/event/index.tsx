import React, { useEffect, useState } from 'react'

import ButtonAction from '../../components/buttonAction';
import ButtonAIcon from '../../components/buttonIcon';
import ButtonToogle from '../../components/buttonToogle';
import Dropdown from '../../components/dropdown';
import DropdownHours from '../../components/dropdown-hours';
import EventColor from '../../components/event-colors';
import InputCount from '../../components/inputCount';

import './style.scss';

const Event = () => {

  const [file, setFile] = useState<any>('');
  const [adv, setAdv] = useState('');

  useEffect(() => {
    setSelect('Advanced')
  })

  const setSelect = (data: string) => {
    setAdv(data)
  }

  return (
    <div className="card-event">

      <div className="card-body">
        <div className="header-actions">
          <ButtonAIcon color={'red'} header />
          <ButtonAIcon color={'yellow'} header/>
          <ButtonAIcon color={'green'} header />
          <div className="sub-header-actions">
            <label htmlFor="data-file">
              {
                file.length ? file[0].name.replace(/.jpeg|.pdf|.png|.jpg|.mp4|.mp3|.txt/g, '') : 'Create an Event'
              }
              <input type="file" id="data-file" name="data-file" hidden onChange={(e: any) => setFile(e.target.files)} />
              <i className="far fa-copy"></i>
            </label>
          </div>
        </div>

        <div className="form-group-event">
          <InputCount />
        </div>

        <div className="toogle-type">
          <ButtonToogle />
        </div>

        <div className="tag-color">
          <p>Color</p>
          <EventColor />
        </div>

        <div className="calendar">
          <label className="data-label">Date</label>
          <Dropdown icon='far fa-calendar-alt' label='Selecione'>
            <h1>Teste</h1>
          </Dropdown>
        </div>

        <div className="type-event">
          <DropdownHours />
          <DropdownHours />
        </div>

      </div>

      <div className="card-footer">
        <div className="drop-advanced">
        <Dropdown label={adv}>
          <ul className="list-adv">
            <li className="item-adv" onClick={() => setSelect('A')}>
              <a className="active-adv" >A</a>
            </li>
            <li className="item-adv" onClick={() => setSelect('B')}>
              <a className="active-adv">B</a>
            </li>
            <li className="item-adv" onClick={() => setSelect('C')}>
              <a className="active-adv">C</a>
            </li>
          </ul>
        </Dropdown>
        </div>
        <div className="action-footer-card">
          <div className="separator">
          <ButtonAction title="Cancel" green />
          </div>
          <ButtonAction title="Create" blue />
        </div>
      </div>
    </div>
  )
}
export default Event;
