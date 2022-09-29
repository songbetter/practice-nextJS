import { createContext, useState } from 'react'

export const ModalContext = createContext({
  isOnModal: false,
  closeModal: () => {},
  openModal: () => {},
})

export function ModalProvider({ children }) {
  const [isOnModal, setIsOnModal] = useState(false)

  const context = {
    isOnModal,
    openModal: () => setIsOnModal(true),
    closeModal: () => setIsOnModal(false),
  }

  return (
    <ModalContext.Provider value={context}>{children}</ModalContext.Provider>
  )
}
