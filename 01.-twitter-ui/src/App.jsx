import './App.css'
import { TwitterCard } from './components/TwitterCard'

import { users } from './data/data'

function App () {
  return (

    <section className='app'>
      {
          users.map(({ id, name, nickname, isFollowing }) => (
            <TwitterCard
              key={id}
              name={name}
              nickname={nickname}
              isFollowing={isFollowing}
            />
          ))
        }
    </section>
  )
}

export default App
