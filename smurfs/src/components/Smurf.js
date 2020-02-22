import React from 'react'
import {connect} from 'react-redux'



function Smurf(props){
return(
    <div className='mySmurf'>
        {props.error ? (
            <div className='error'>{props.error}</div>
        ):(props.smurf.map(p => <div key={p.id} className='eachSmurf'>
            <p>Name: {p.name}</p>
            <p>Age: {p.age}</p>
            <p>Height: {p.height}</p>
        </div>))}
    </div>
)
}


const mapStateToProps = state =>{
    return{
        smurf: state.smurf,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {}
)(Smurf)