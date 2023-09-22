import React, { useReducer } from 'react';
import './counter.css'


const initialState =5;

const reducer =(state,action)=>{
    switch (action) {
        case 'increment':
            return state +1;
        case 'decrement':
            return state -1;
        default:
           return state;
    }
}


const Counter = () => {
    const [count,dispatch]=useReducer(reducer,initialState);
    return (
        <div className='counter'>
            <div className=''>{count}</div>
            <button type='button' className='btn' onClick={()=>dispatch('increment')}>INCREMENT</button>
            <button type='button' className='btn' onClick={()=>dispatch('decrement')}>DECREMENT</button>
        </div>
    );
};

export default Counter;