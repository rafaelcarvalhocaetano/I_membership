import React from 'react'
import ButtonAction from '../../components/buttonAction';
import EventColor from '../../components/event-colors';

import './style.scss';

const Event = () => {
  return (
    <div className="card-event">

      <div className="card-body">
        <div className="header-actions">
          <h1>Header Actions</h1>
          <div className="sub-header-actions">
            <h1>Create an Event</h1>
            <img src="" alt="Folder" />
          </div>
        </div>

        <div className="form-group-event">
          <input type="text" className="add-item" />
          <p className="count">44</p>
        </div>

        <div className="type-event">
          <button className="btn btn-event">Event</button>
          <button className="btn btn-reminder">Reminder</button>
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
        <i className="fas fa-address-card"></i>
        <i className="fab fa-adn"></i>
        <div className="dropdown-hours-end">
          <span>19:00</span>
          <img src="#" alt="Arrow" />
        </div>

      </div>

      <div className="card-footer">
        <ButtonAction title="Cancel" green />
        <ButtonAction title="Create" blue />
      </div>


    </div>
  )
}
export default Event;
