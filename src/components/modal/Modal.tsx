import React, { useState } from 'react';
import InputControll from '../input-controll/InputControll';

import './model.scss';

import close from '../../assets/icons/close_model.svg';
import UserService from '../../service/UserService';

const Modal = ({toggle}: any) => {

  const service = new UserService();

  const [form, setForm] = useState<any>({
    url_img:  null,
    user_name: null,
    end_date: null,
    profits: null,
    losses: null,
  })


  const createUser = () => {
    service.api.post('/user', form).then((_: any) => toggle(false))
  }

  const requestValidator = () => {
    if (form.url_img && form.user_name && form.end_date && form.profits && form.losses) {
      if (validatorUrl(form.url_img)) {
        createUser();
      }
    } else {
      alert('Formulário inválido');
    }
  }

  const validatorUrl = (e: string): boolean => {
    return RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g).test(e);
  }

  return(
    <div className="modal-container">
      <form className="create-user" onSubmit={(e) => {
        e.preventDefault();
        requestValidator();
      }}>
        <div className="header-form">
          <h3>Add New User</h3>
          <button className="btn-close" type="button">
            <img src={close} alt="Fechar"/>
          </button>
        </div>
          <InputControll label={'Name'} placeholder={'place'} id={'user'} emitValue={(x: string) => setForm({...form, user_name: x})}/>
          <InputControll label={'Image Url'} placeholder={'Url image'} id={'url'} emitValue={(x: string) => setForm({...form, url_img: x})}/>
        <div className="container-values">
          <InputControll label={'End Date'} placeholder={'End Date'} id={'end_date'} emitValue={(x: string) => setForm({...form, end_date: x})}/>
         <InputControll label={'Phone'} placeholder={'Phone'} id={'phone'} emitValue={(x: string) => setForm({...form, phone: x})} />
        </div>
        <div className="container-values">
          <InputControll label={'Profits'} placeholder={'Profits'} id={'profits'} emitValue={(x: string) => setForm({...form, profits: x})} />
          <InputControll label={'Losses'} placeholder={'Losses'} id={'losses'} emitValue={(x: string) => setForm({...form, losses: x})} />
        </div>
        <button className="btn-add" type="submit">
          <span>Save</span>
        </button>
      </form>
    </div>
  );
}

export default Modal;