import React, { useEffect, useReducer } from 'react';
import Post from './Post';
import './getposts.css'

const initialState ={
    loading : true,
    error : "",
    posts : []
}

const reducer =(state,action)=>{
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                posts : action.result,
                error: ""
            }
        case 'ERROR':
        return {
            loading: false,
            posts : [],
            error:action.error
        }
        case 'REMOVE_ITEM':
            const deletePost = state.posts.filter(post => post.id !==action.payload.id)
            return {
                ...state,
                posts : deletePost,
            }
        default:
            return state;
    }
}


const GetPost = () => {
    const [state,dispatch]=useReducer(reducer,initialState)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>{
            dispatch({type:"SUCCESS",result:data.slice(0, 10),error:""})
        })
        .catch(err =>{
            dispatch({type:"SUCCESS",result:[],error:err})
        })
    },[])


    const handlePost =(id)=>{
        
        dispatch({ type: 'REMOVE_ITEM', payload: { id } });
    }


    return (
        <div>
             <h1>Here is my Post : {state.posts.length}</h1>
             <div className="container">
                    {
                    state.loading? 'Loading...': state.posts.map(post=><Post key={post.id} handlePost={handlePost} post ={post}></Post>)
                    }
             </div>
             <div class="">
                {
                    state.error ||null
                }
             </div>    
        </div>
    );
};

export default GetPost;