import React, {useState} from 'react'
import './Content.scss'
import List from '../List/List';
import {arrayFilter} from '../../helper/arrayFilter';

const Content = ({data, getApiDataTC}) => {

  const [selected, newSelected] = useState([])
  const [localState, setLocalState] = useState([])

  const getPickOptions = (e) => {
    if (selected.indexOf(e.target.value) === -1) {
      newSelected(prevState => [...prevState, e.target.value])
    } else {
      newSelected(prevState => [...prevState.filter(item => item !== e.target.value)])
    }
    console.log('Сюда я ткнул: ', e.target.value)
    setLocalState([...localState, selected])
  }
  const resetState = () => {
    newSelected([])
    console.log('Я все сбросил и сломал хаха!')
  }
  const returnToPrevState = () => {
    newSelected(prevState => [...localState[localState.length - 1]])
    setLocalState([...localState])
  }


  return <div className='contentWrapper'>
    <h1>Content with props</h1>
    <div>
      <button onClick={() => returnToPrevState()}>Назад</button>
      <button onClick={() => getApiDataTC()}>Загрузить</button>
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
    <List selected={selected}/>
  </div>
}

export default Content