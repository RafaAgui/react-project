import './App.scss'
import { TwitterFollowCard } from './components/TwitterFollowCard'

  function App() {
    const users = [
      { name: 'Rafael Aguilar', handle: 'rafaaguilar', avatar: 'https://cdn-icons-png.freepik.com/512/5556/5556468.png', isFollowing: false, id: 1 },
      { name: 'Marcos Mendez Filesi', handle: 'mmfilesi', avatar: 'https://cdn-icons-png.freepik.com/512/5556/5556468.png', isFollowing: true, id: 2 },
      { name: 'Trololo', handle: 'trolo', avatar: 'https://cdn-icons-png.freepik.com/512/5556/5556468.png', isFollowing: false, id: 3 },
    ]

    return (
      <>
        <h1 className='title'>Twiter card</h1>
        <section className='container'>
          {
            users.map(user => { 
              const { name, handle, avatar, isFollowing, id } = user
              return <TwitterFollowCard key={id} name={name} handle={handle} avatar={avatar} initialFollowing={isFollowing} />
            })
          }
        </section>
      </>
    )
  }


export default App
