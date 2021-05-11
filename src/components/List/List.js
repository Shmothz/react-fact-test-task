import React from 'react'

const List = ({localState, count}) => {
  return <ul>
    {localState[count]
      ? localState[count].map(i => <li key={i}>{i}</li>)
      : null
    }
  </ul>
}

export default List