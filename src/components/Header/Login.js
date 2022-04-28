import React, { useState } from 'react';

import { Modal } from './Modal';

function Login() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <div className="login-container">
        <div onClick={openModal}>
          <img src="./image/loginorcreate.png" className="login-btn"></img>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </>
  );
}

export default Login;
