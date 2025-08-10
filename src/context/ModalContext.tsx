import { activeModal, subscribe } from "@/components/modal/modalManager";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface ModalContextType {
  activeModal: string | null;
  toggleModal: (modalId: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeModalState, setActiveModalState] = useState<string | null>(null);

  const toggleModal = useCallback((modalId: string) => {
    setActiveModalState((prev) => (prev === modalId ? null : modalId));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const unsubscribe = subscribe(() => {
      setActiveModalState(activeModal());
    });

    return () => unsubscribe();
  }, []);

  return (
    <ModalContext.Provider value={{ activeModal: activeModalState, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};
