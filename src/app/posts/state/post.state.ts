import { Post } from "../models/post.model"

export interface PostState{
    posts: Post[]
}

export const initialState:PostState={
    posts:[
        {id:'1',title:'title 1', description:'Desc 1'},
        {id:'2',title:'title 2', description:'Desc 2'}

    ]
}