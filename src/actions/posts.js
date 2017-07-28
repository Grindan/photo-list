import { ADD_POST } from './../types/posts';

export const addPost = (post) => dispatch => {
  dispatch({ type: ADD_POST, data: post });
}
