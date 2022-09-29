import { useContext } from 'react'
import ReactDOM from 'react-dom'

import { ModalContext } from '../../store/modal-context'
import Button from './button'

export default function Modal({ children }) {
  const { closeModal } = useContext(ModalContext)

  return ReactDOM.createPortal(
    <ModalBackground>
      <ModalBox>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CloseIcon clickEvent={closeModal} />

          {children}
        </div>
      </ModalBox>
    </ModalBackground>,
    document.getElementById('modal'),
  )
}

function ModalBackground({ children }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.4)',
      }}
    >
      {children}
    </div>
  )
}

function ModalBox({ children }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: 'auto',
        width: '50%',
        height: '50%',
        background: '#fff',
        color: 'black',
      }}
    >
      {children}
    </div>
  )
}

function CloseIcon({ clickEvent }) {
  return (
    <div
      style={{
        alignSelf: 'flex-end',
        fontSize: '3rem',
        margin: '0.5rem 1rem',
        cursor: 'pointer',
      }}
      onClick={clickEvent}
    >
      🆇
    </div>
  )
}
