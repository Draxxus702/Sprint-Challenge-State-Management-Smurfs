import React, {Component} from 'react'

import axios from 'axios'


class NewSmurf extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

changeHandler = (e) =>{
    this.setState({[e.target.name]: e.target.value})
}

submitHandler = e =>{
    e.preventDefault()
    console.log(this.setState)
    axios.post(`http://localhost:3333/smurfs`, this.state)
    .then(res =>{
        console.log('post', res)
    })
    .catch(err =>{
        console.log(err)
    })
}

render(){
    const {name, age, height} = this.state
    return(
        <div className='formContainer'>
            <form className='form' onSubmit={this.submitHandler}>
                <label htmlFor='name'>Name: </label>
                <input
                type='text'
                name='name'
                value={name}
                placeholder='Name'
                onChange={this.changeHandler}
                />
                <label htmlFor='age'>Age: </label>
                <input
                type ='text'
                name = 'age'
                value={age}
                placeholder = 'Age'
                onChange={this.changeHandler}
                />
                <label htmlFor='height'>Height: </label>
                <input
                type ='text'
                name ='height'
                value ={height}
                placeholder ='Height'
                onChange={this.changeHandler}
                />
                <button className='formButton' type='submit' onClick={this.submitHandler}>Submit!</button>
            </form>
        </div>
    )
}
}

export default NewSmurf