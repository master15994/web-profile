const ADD_POST = 'ADD-POST';
const UPDATE_INPUT_POST = 'UPDATE-INPUT-POST';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        text: state.newWords,
        likes: 0,
        id: 3,
      };
      state.posts.push(newPost);
      state.newWords = '';
      return state;
    case UPDATE_INPUT_POST:
      state.newWords = action.newPost;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updatePostActionCreator = text => ({
  type: UPDATE_INPUT_POST,
  newPost: text,
});
export default profileReducer;
//   if (action.type === ADD_POST) {
//     let newPost = {
//       text: state.newWords,
//       likes: 0,
//       id: 3,
//     };
//     state.posts.push(newPost);
//     state.newWords = '';
//   } else if (action.type === UPDATE_INPUT_POST) {
//     state.newWords = action.newPost;
//   }
//   return state;
