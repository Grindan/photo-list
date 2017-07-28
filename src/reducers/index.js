import { ADD_POST } from './../types/posts';


const postsReducer =  (state = {}, action) => {
    switch (action.type) {
        case ADD_POST: {
            const posts = state.posts || [];
            posts.push(action.data);
            return {
                posts: posts
            };
        }
        default:
            return state;
    }
}

export default postsReducer;