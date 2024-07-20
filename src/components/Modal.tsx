import React from "react";

interface ModalProps {
  round: number;
  isVisible: boolean;
}

const Modal: React.FC<ModalProps> = ({ round, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <h1 className="text-6xl font-bold text-white">Round {round}</h1>
    </div>
  );
};

export default Modal;
