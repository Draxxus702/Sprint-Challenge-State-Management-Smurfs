import axios from 'axios'

export const FETCH_DATA='FETCH_DATA'
export const UPDATE_DATA ='UPDATE_DATA'
export const SET_ERROR ='SET_ERROR'


export const getData = () => dispatch =>{
dispatch({ type: FETCH_DATA })
axios.get(`http://localhost:3333/smurfs`)
.then(res =>{
console.log('axios', res.data)
dispatch ({ type: UPDATE_DATA, payload: res.data })
})
.catch(err =>{
    console.log('AN ERROR HAS OCCURED', err)
    dispatch({ type: SET_ERROR, payload: 'AN ERROR HAS OCCURED', err })
})
}