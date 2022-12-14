import { createReducer, on } from "@ngrx/store";
import { addPost } from "./post.action";
import { initialState } from "./post.state";

const _postsReducer = createReducer(
    initialState,
   on(addPost,(state,action)=>{
    let post={...action.post}
    console.log(action)
    post.id=(state.posts.length +1).toString()
    return{
      ...state,
      posts:[...state.posts,post]
    }

   })
  );


export function postsReducer(state: any, action: any) {
    return _postsReducer(state, action);
  }