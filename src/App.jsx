import './App.scss'
import { TwitterFollowCard } from './components/TwitterFollowCard'

  function App() {
    return (
      <>
        <h1 className='title'>Twiter card</h1>
        <section className='container'>
          <TwitterFollowCard name="Rafael Aguilar" handle="rafaaguilar" avatar="https://cdn-icons-png.freepik.com/512/5556/5556468.png" initialFollowing />
          <TwitterFollowCard name="Marcos Méndez Filesi" handle="mmfilesi" avatar="https://cdn-icons-png.freepik.com/512/5556/5556468.png" />
          <TwitterFollowCard name="Trololo" handle="trolo" avatar="https://cdn-icons-png.freepik.com/512/5556/5556468.png" />
        </section>
      </>
    )
  }


export default App
