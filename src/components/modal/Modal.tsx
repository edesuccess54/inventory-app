"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { closeModal, toggleModal } from "./modalManager";
import { useModal } from "@/context/ModalContext";

interface ModalProps {
  modalId: string;
  children: React.ReactNode;
  closeOnBackdropClick: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, modalId, closeOnBackdropClick }) => {
  const { activeModal } = useModal();
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [route, setRoute] = useState<null | string>(null);

  useEffect(() => {
    modalRef.current = document.querySelector("#modal-id") as HTMLDivElement;
    setRoute(window.location.pathname);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      closeModal(modalId);
    }
  }, [route]);

  if (activeModal !== modalId || !modalRef.current) return null;

  return modalRef.current
    ? createPortal(
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeOnBackdropClick ? () => toggleModal(modalId) : undefined}
            className={`fixed inset-0 bg-[#D9D9D9]/60 backdrop-blur-xs z-40 ${
              closeOnBackdropClick ? "cursor-pointer" : ""
            }`}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="fixed top-0 bottom-0 left-0 right-0 z-50 p-4 m-auto md:w-fit h-fit"
          >
            {children}
          </motion.div>
        </>,
        modalRef.current
      )
    : null;
};

export default Modal;
