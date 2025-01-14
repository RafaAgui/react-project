import './App.scss'

const name = 'Rafael Aguilar'
const handle = 'yourhandle'
const avatar = 'https://cdn-icons-png.freepik.com/512/5556/5556468.png'

  function App() {
    return (
      <>
        <h1>Twiter card</h1>
        <article className='card'>
          <header className='card__header'>
            <img className='card__avatar' src={avatar} alt='avatar' />
            <div className='card__info'>
              <h2 className='card__name'>{name}</h2>
              <h3 className='card__handle'>{handle}</h3>
            </div>
          </header>
          <aside className='card__follow'>
            <button className='card__button' type="button">Follow</button>
          </aside>
        </article>
      </>
    )
  }


export default App
