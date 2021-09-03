import React, { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ imgInfo, onClose }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.code === "Escape") {
        onClose();
        window.removeEventListener("keydown", handleKeyDown);
      }
      return;
    },
    [onClose]
  );

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
      window.removeEventListener("keydown", handleKeyDown);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">
        <img src={imgInfo.largeImageURL} alt={imgInfo.alt} />
      </div>
    </div>,
    modalRoot
  );
}
