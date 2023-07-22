const ADD_NEWS = 'ADD-NEWS';
const UPDATE_INPUT_NEWS = 'UPDATE-INPUT-NEWS';

const newsColumnReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEWS:
      let body = state.newItemMessage;
      state.newItemMessage = '';
      state.newsItem.push({ text: body, id: 6 });
      return state;
    case UPDATE_INPUT_NEWS:
      state.newItemMessage = action.body;
      return state;
    default:
      return state;
  }
};

export const addNewsActionCreator = () => ({ type: ADD_NEWS });
export const updateInputNewsActionCreator = body => ({
  type: UPDATE_INPUT_NEWS,
  body: body,
});

export default newsColumnReducer;
