const ADD_NEWS = 'ADD-NEWS';
const UPDATE_INPUT_NEWS = 'UPDATE-INPUT-NEWS';

let initialState = {
    newsItem: [
        { text: 'Why people fell alone today?', id: 1 },
        { text: 'Hate or Love? What to choose', id: 2 },
        { text: 'Live in 2023 ', id: 3 },
        { text: 'See obilities', id: 4 },
        { text: 'Work hard , Play hard', id: 5 },
    ],
    newItemMessage: '',
};

const newsColumnReducer = (state = initialState, action) => {
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
