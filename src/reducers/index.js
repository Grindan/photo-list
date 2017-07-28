import { ADD_POST } from './../types/posts';


const postsReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_POST: {
            let posts = state.posts || [];
            posts = posts.slice();
            posts.push(action.data);
            return {
                posts: posts
            };
        }
        default:
            return state
    }
}

export default postsReducer;