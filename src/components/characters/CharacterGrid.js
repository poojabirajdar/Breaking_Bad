import React from 'react'
import CharacterItems from './CharacterItems'
import Spinner from '../ui/Spinner'

const characterGrid = ({items , isLoading}) => {
  return isLoading ? (<Spinner/>) :( <section className="cards">
      {items.map(item=>(
          <CharacterItems key={item.char_id} item={item}></CharacterItems>
      ))}
  </section>
  )
}

export default characterGrid