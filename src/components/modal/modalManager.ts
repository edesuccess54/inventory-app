let activeModalState: string | null = null;
const subscribers: Array<() => void> = [];

export const toggleModal = (modalId: string) => {
  if (typeof window === "undefined") {
    console.warn("toggleModal was called on the server. Ignoring.");
    return;
  }

  activeModalState = activeModalState === modalId ? null : modalId;
  subscribers.forEach((callback) => callback());
};

export const closeModal = (modalId: string) => {
  if (typeof window === "undefined") {
    console.warn("closeModal was called on the server. Ignoring.");
    return;
  }

  if (activeModalState === modalId) {
    activeModalState = null;
    subscribers.forEach((callback) => callback());
  }
};

export const activeModal = () => {
  if (typeof window === "undefined") {
    console.warn("activeModal was accessed on the server.");
    return null;
  }

  return activeModalState;
};

export const subscribe = (callback: () => void) => {
  if (typeof window === "undefined") {
    console.warn("subscribe was called on the server. Ignoring.");
    return () => {};
  }

  subscribers.push(callback);

  return () => {
    const index = subscribers.indexOf(callback);
    if (index > -1) {
      subscribers.splice(index, 1);
    }
  };
};
