let store = {
  getState() {
    return this._state;
  },

  _callSuscriber() {
    console.log('changed');
  },

  addPost() {
    let newText = {
      text: this._state.profilePage.newWords,
      likes: 0,
      id: 3,
    };
    this._state.profilePage.posts.push(newText);
    this._callSuscriber(this._state);
  },

  updateInputText(newText) {
    this._state.profilePage.newWords = newText;
    this._callSuscriber(this._state);
  },

  subscribe(observer) {
    this._callSuscriber = observer;
  },

  _state: {
    dialogsPage: {
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
    },

    profilePage: {
      posts: [
        { text: "Don't be angry better be strong", likes: 11, id: 1 },
        { text: "Any joke it's should be funny", likes: 31, id: 2 },
        { text: 'Simple emotion , simple life', likes: 23, id: 3 },
      ],

      newWords: 'lol be cool',
    },
  },
};

export default store;
