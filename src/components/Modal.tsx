import React from 'react'


type ModalProps = {
    children: React.ReactNode; 
    isOpen: boolean; 
    onClose: () => void;
    hidden?: boolean;
}

const Modal: React.FC<ModalProps> = ({children, isOpen, onClose,  hidden}) => {

    const closeModal = () => onClose();

  const hideModal = isOpen ? "visible opacity-100" : "invisible opacity-0";

  return (
    <>
    <div
      onClick={closeModal}
      className={`bg-white/50 backdrop-blur-sm  fixed inset-0 z-[20] transition-all duration-500 ${hideModal ?? hidden}`}>
    </div>
        {children}
    </>
  )
}

export default Modal;