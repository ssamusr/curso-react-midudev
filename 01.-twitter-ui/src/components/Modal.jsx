import { useEffect, useRef } from 'react'

export function Modal ({ nickname, showModal, setShowModal, follow, setFollow }) {
  const modalRef = useRef()

  useEffect(() => {
    function handleClickOutside (event) {
      if (modalRef.current && event.target.classList.contains('active')) {
        // Si el modal está activado y el usuario hace click en el elemento con la className='active'
        setShowModal(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [modalRef])

  const activeModal = showModal ? 'modal active' : 'modal hidden'

  const handleUnfollow = () => {
    setFollow(!follow)
    setShowModal(!showModal)
  }

  const handleCancel = () => {
    setShowModal(!showModal)
  }

  return (
    <div className={activeModal}>
      <div className='modal-container' ref={modalRef}>
        <h2 className='modal-title'>¿Quieres dejar de seguir a @{nickname}?</h2>
        <p className='modal-text'>Sus Tweets ya no aparecerán en tu cronología de inicio. Podrás seguir viendo su perfil, a menos que sus Tweets estén protegidos.</p>
        <button
          onClick={handleUnfollow}
          className='modal-btn'
        >
          Dejar de seguir
        </button>
        <button
          onClick={handleCancel}
          className='modal-btn-cancel'
        >
          Cancelar
        </button>
      </div>
    </div>
  )
}
