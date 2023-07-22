const ADD_TEXT = 'ADD-TEXT';
const UPDATE_INPUT_TEXT = 'UPDATE-INPUT-TEXT';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_TEXT:
      let newText = {
        text: state.newWords,
        id: 4,
      };
      state.dialogsPage.dialogsItem.push(newText);
      state.newWords = '';
      return state;
    case UPDATE_INPUT_TEXT:
      state.newWords = action.newText;
      return state;
    default:
      return state;
  }

  //   if (action.type === ADD_TEXT) {
  //     let newText = {
  //       text: state.newWords,
  //       id: 4,
  //     };
  //     state.dialogsPage.dialogsItem.push(newText);
  //     state.newWords = '';
  //   } else if (action.type === UPDATE_INPUT_TEXT) {
  //     state.newWords = action.newText;
  //   }
  //   return state;
};

export const addTextActionCreator = () => ({ type: ADD_TEXT });

export const updateTextActionCreator = text => ({
  type: UPDATE_INPUT_TEXT,
  newText: text,
});
export default dialogsReducer;
