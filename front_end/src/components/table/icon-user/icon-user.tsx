import React from 'react';

import './icon-user.scss';

const IconUser = ({user}: any) => {
  return(
    <div className="use-image">
      <img src={user.url_img ? user.url_img : null} alt="UserImage" />
      <span>{user.user_name ? user.user_name : null}</span>
    </div>
  );
}
export default IconUser;