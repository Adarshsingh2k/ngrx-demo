import { counterReducer } from "src/app/counter/state/counter.reducer";
import { CounterState } from "src/app/counter/state/counter.state";
import { postsReducer } from "src/app/posts/state/post.reducer";
import { PostState } from "src/app/posts/state/post.state";

export interface AppState{
    counter:CounterState,
    posts:PostState
}

export const appReducer={
    counter:counterReducer,
    posts:postsReducer
}