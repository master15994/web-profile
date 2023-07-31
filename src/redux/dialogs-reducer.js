const ADD_TEXT = 'ADD-TEXT';
const UPDATE_INPUT_TEXT = 'UPDATE-INPUT-TEXT';

let initialState = {
    namesItem: [
        { name: 'Lera', id: 1 },
        { name: 'Katerina', id: 2 },
        { name: 'Tigran', id: 3 },
        { name: 'Kamila', id: 4 },
    ],

    dialogsItem: [
        { text: 'If u wanna be ok, wash your penis everyday', id: 1 },
        { text: 'Best time its right now!', id: 2 },
        { text: 'Arrogant , confident , serious - way to success', id: 3 },
    ],

    newDialog: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEXT:
            let newText = {
                text: state.newDialog,
                id: 4,
            };
            state.dialogsItem.push(newText);
            state.newDialog = '';
            return state;
        case UPDATE_INPUT_TEXT:
            state.newDialog = action.newText;
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
