import { useState } from 'react'
import { Modal } from './Modal'

export function Button ({ nickname, isFollowing }) {
  const [follow, setFollow] = useState(isFollowing)
  const [showModal, setShowModal] = useState(false)

  const handleFollow = () => {
    if (follow === false) {
      setFollow(!follow)
    } else {
      setShowModal(!showModal)
    }
  }

  const buttonClassName = follow ? 'btn following' : 'btn'

  const text = follow ? 'Siguiendo' : 'Seguir'

  return (
    <>
      <button
        onClick={handleFollow}
        className={buttonClassName}
      >
        <span className='is-following'>{text}</span>
        <span className='stop-following'>Dejar de seguir</span>
      </button>
      <Modal nickname={nickname} showModal={showModal} setShowModal={setShowModal} follow={follow} setFollow={setFollow} />
    </>
  )
}
