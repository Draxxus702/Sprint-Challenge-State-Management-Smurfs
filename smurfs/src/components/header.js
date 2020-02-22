import React from 'react'
import {connect} from 'react-redux'
import {getData} from '../actions'


function Header(props){
    const handleGetData = e =>{
        e.preventDefault()
        props.getData()
    }



return(
    <div>
        <button className='getEm' onClick={handleGetData}>Get them Smurfs</button>
    </div>
)
}

const mapStateToProps = state =>{
    return{
        isFetchingData: state.isFetchingData
    }
}


export default connect(
    mapStateToProps,
    {getData}
)(Header)