const ADD_POST = 'ADD-POST';
const UPDATE_INPUT_POST = 'UPDATE-INPUT-POST';

let initialState = {
    posts: [
        { text: "Don't be angry better be strong", likes: 11, id: 1 },
        { text: "Any joke it's should be funny", likes: 31, id: 2 },
        { text: 'Simple emotion , simple life', likes: 23, id: 3 },
    ],

    newWords: '',
};

const profileReducer = (state = initialState, action) => {
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
