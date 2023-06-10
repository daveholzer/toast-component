import React from "react";
import { useEscapeKey } from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);
  useEscapeKey(() => setToasts([]));

  const closeAllToasts = () => {
    setToasts([]);
  }

  const closeToast = React.useCallback((toClose) => {
    const newList = toasts.filter(item => item.id !== toClose);
    setToasts(newList);
  }, [toasts]);

  const addNewToast = React.useCallback((newToast) => {
    const toast = { id: crypto.randomUUID(), ...newToast}
    const newList = [...toasts, toast];
    setToasts(newList);
  }, [toasts]);

  return (
    <ToastContext.Provider value={{
      toasts,
      closeAllToasts,
      addNewToast,
      closeToast,
    }}>
      {children}
    </ToastContext.Provider>
  )
}

export default React.memo(ToastProvider);
