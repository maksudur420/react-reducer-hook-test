import React, { useReducer } from 'react';
import './counter.css'


const initialState ={
    counter:5,
};

const reducer =(state,action)=>{
    switch (action.type) {
        case 'increment':
            return {counter: state.counter +action.value}
        case 'decrement':
            return {counter: state.counter -action.value}
        default:
           return state;
    }
}


const Counter = () => {
    const [count,dispatch]=useReducer(reducer,initialState);
    return (
        <div className='counter'>
            <div className=''>{count.counter}</div>
            <button type='button' className='btn' onClick={()=>dispatch({type:"increment",value: 6})}>INCREMENT</button>
            <button type='button' className='btn' onClick={()=>dispatch({type:"decrement",value:2})}>DECREMENT</button>
        </div>
    );
};

export default Counter;