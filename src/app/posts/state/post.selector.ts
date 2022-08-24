import { createFeatureSelector, createSelector, props } from "@ngrx/store";
import { PostState } from "./post.state";

const getPostState=createFeatureSelector<PostState>('posts')

export const getPosts= createSelector(getPostState, state=> state.posts)
// export const getPostById = createSelector( getPostState, (state:any,props:any)=>{
//     return state.posts.find(posts=> posts.id===props.id)
// }
    
//   );

export const getPostById = (props:{id:string})=>{
    return createSelector(getPostState, state=>{
        state.posts.find((post)=>post.id===props.id)
    })
}