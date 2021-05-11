import React, {useState} from 'react'
import './Content.scss'
import List from '../List/List';
import {arrayFilter} from '../../helper/arrayFilter';

const Content = ({data, getApiDataTC}) => {

  const [selected, newSelected] = useState([])
  const [localState, setLocalState] = useState([null, null, null, null, null, null, null, null, null, null])
  const [count, setCount] = useState(0)

  const getPickOptions = (e) => {
    if (selected.indexOf(e.target.value) === -1) {
      newSelected(prevState => [...prevState, e.target.value])
      setCount(count + 1)
    } else {
      newSelected(prevState => [...prevState.filter(item => item !== e.target.value)])
      setCount(count - 1)
    }
    if (localState.indexOf(null) !== -1) {
      localState[localState.indexOf(null)] = selected
      setCount(count + 1)
      console.log('Вот это место: ', count)
    } else {
      setLocalState(prevState => [...localState.splice(0, 1), selected])
    }
  }
  const prevState = () => {
    setCount(count - 1)
    newSelected([localState[count]])
    console.log('prevState count: ', count)
  }
  const nextState = () => {
    setCount(count + 1)
    newSelected([localState[count]])
    console.log('nextState count: ', count)
  }
  const resetState = () => {
    newSelected([])
    setCount(0)
    setLocalState([null, null, null, null, null, null, null, null, null, null])
    console.log('Я все сбросилхаха!')
  }


  return <div className='contentWrapper'>
    <h1>Content with props</h1>
    <div>
      <button onClick={() => prevState()}>Назад</button>
      <button onClick={() => getApiDataTC()}>Загрузить</button>
      <button onClick={() => nextState()}>Вперед</button>
      <button onClick={() => resetState()}>Сброс</button>
    </div>
    <div>
      {
        data.testArr
          ? arrayFilter(data.testArr).map(i => <select multiple={true}
                                                       id={'select'}
                                                       key={i}
                                                       onChange={getPickOptions}
                                                       className='selectWrapper'
          >{i.map(u => <option key={u}
                               value={u}
          >{u}</option>)}</select>)
          : null
      }
    </div>
    <List localState={localState} count={count}/>
    <span>{count} / 10</span>
  </div>
}

export default Content