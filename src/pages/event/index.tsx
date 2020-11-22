import React from 'react'
import ButtonAction from '../../components/buttonAction';
import ButtonAIcon from '../../components/buttonIcon';
import Dropdown from '../../components/dropdown';
import EventColor from '../../components/event-colors';
import InputCount from '../../components/inputCount';

import './style.scss';

const Event = () => {
  return (
    <div className="card-event">

      <div className="card-body">
        <div className="header-actions">
          <ButtonAIcon color={'red'} header />
          <ButtonAIcon color={'yellow'} header/>
          <ButtonAIcon color={'green'} header />
          <div className="sub-header-actions">
            <h1>Create an Event</h1>
            <i className="far fa-copy"></i>
          </div>
        </div>

        <div className="form-group-event">
          <InputCount />
        </div>

        <div className="type-event">
          <Dropdown />
        </div>

        <div className="tag-color">
          <p>Color</p>
          <EventColor />
        </div>

        <div className="calendar">
          <label htmlFor="date">Date</label>
          <input type="date" name="date-calendar" id="date" />
        </div>

        <div className="dropdown-hours-start">
          <span>19:00</span>
          <img src="#" alt="Arrow" />
        </div>
        <div className="dropdown-hours-end">
          <span>19:00</span>
          <img src="#" alt="Arrow" />
        </div>

      </div>

      <div className="card-footer">
        <p>Advenced</p>
        <div className="action-footer-card">
          <ButtonAction title="Cancel" green />
          <ButtonAction title="Create" blue />
        </div>

      </div>


    </div>
  )
}
export default Event;
