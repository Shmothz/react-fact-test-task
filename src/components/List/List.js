import React from 'react'

const List = ({selected}) => {
  return <ul>
    {selected
      ? selected.map(i => <li key={i}>{i}</li>)
      : null
    }
  </ul>
}

export default List