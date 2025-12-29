import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = function Modal({ children, open, onClose }) {
  const dialog = useRef();
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, []);
  return createPortal(
    <dialog className="modal" ref={dialog} open={open} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
