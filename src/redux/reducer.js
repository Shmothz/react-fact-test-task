import axios from 'axios';

const GET_API_DATA = 'reducer/GET_API_DATA'

const initialState = {
  data: {}
}

export const reducer = (state= initialState, action) => {
  switch(action.type) {
    case GET_API_DATA:
      return {
        ...state,
        data: action.apiData
      }
    default:
      return state
  }
}

const getApiDataAC = (apiData) => ({type: GET_API_DATA, apiData})

const getTestData = () => {
  return axios.get('https://raw.githubusercontent.com/WilliamRu/TestAPI/master/db.json').then(res => res.data)
}

export const getApiDataTC = () => async (dispatch) => {
  const res = await getTestData()
  dispatch(getApiDataAC(res))
}

