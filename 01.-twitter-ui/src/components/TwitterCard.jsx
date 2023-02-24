import { Button } from './Button'

export function TwitterCard ({ name, nickname, isFollowing }) {
  return (
    <article className='cart'>
      <header className='cart-header'>
        <img src={`https://unavatar.io/${nickname}`} alt='Avatar' className='cart-avatar' />
        <div className='cart-info'>
          <span className='cart-info-name'>{name}</span>
          <span className='cart-info-nickname'>@{nickname}</span>
        </div>
      </header>

      <aside>
        <Button nickname={nickname} isFollowing={isFollowing} />
      </aside>
    </article>

  )
}
