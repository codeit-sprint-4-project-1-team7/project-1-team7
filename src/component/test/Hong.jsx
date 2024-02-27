import { useState, useEffect } from 'react';
import { Modal } from '../common/modal/Modal';
import { Toast } from '../common/toast/Toast';
import { Badge } from '../common/badge/Badge';

const tempRelation = '친구';

export function Hong() {
  const [modal, setModal] = useState(false);
  const [toast, setToast] = useState(false);

  const handleModal = () => {
    if (modal === true) setModal(false);
    else setModal(true);
  };
  const handleToast = () => {
    if (toast === true) setToast(false);
    else setToast(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (toast === true) setToast(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [modal, toast]);

  return (
    <>
      <h1>여기에 자유롭게 수정하면서 테스트 해보시면 됩니다!</h1>
      <button onClick={handleModal}>모달</button>
      <button onClick={handleToast}>토스트</button>
      <Badge relation={tempRelation}></Badge>

      {toast && <Toast onClick={handleToast}></Toast>}
      {modal && <Modal onClick={handleModal}></Modal>}
    </>
  );
}
