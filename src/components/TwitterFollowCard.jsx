import './TwitterFollowCard.scss'
import PropTypes from 'prop-types'
import { useState } from 'react'

export function TwitterFollowCard({ name, handle, avatar, initialFollowing }) {
const [isFollowing, setFollowing] = useState(initialFollowing)

const handleClick = () => {
  setFollowing(!isFollowing)
}


const buttonText = isFollowing ? 'Following' : 'Follow'
const buttonClass = isFollowing ? 'card__button--following' : ''

  return (
    <article className='card'>
    <header className='card__header'>
      <img className='card__avatar' src={avatar} alt='avatar' />
      <div className='card__info'>
        <h2 className='card__name'>{name}</h2>
        <h3 className='card__handle'>{handle}</h3>
      </div>
    </header>
    <aside className='card__follow'>
      <button className={`card__button ${buttonClass}`} type="button" onClick={handleClick}>{buttonText}</button>
    </aside>
  </article>
  )
}


TwitterFollowCard.propTypes = {
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,  
  avatar: PropTypes.string.isRequired,
  initialFollowing: PropTypes.bool
}