let store = {
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

      newWords: '',
    },

    profilePage: {
      posts: [
        { text: "Don't be angry better be strong", likes: 11, id: 1 },
        { text: "Any joke it's should be funny", likes: 31, id: 2 },
        { text: 'Simple emotion , simple life', likes: 23, id: 3 },
      ],

      newWords: '',
    },
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSuscriber = observer;
  },

  _callSuscriber() {
    console.log('changed');
  },

  // addPost() {
  //   let newPost = {
  //     text: this._state.profilePage.newWords,
  //     likes: 0,
  //     id: 3,
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._callSuscriber(this._state);
  // },

  // updateInputPost(newPost) {
  //   this._state.profilePage.newWords = newPost;
  //   this._callSuscriber(this._state);
  // },

  // addText() {
  //   let newText = {
  //     text: this._state.dialogsPage.newWords,
  //     id: 4,
  //   };

  //   this._state.dialogsPage.dialogsItem.push(newText);
  //   this._callSuscriber(this._state);
  // },

  // updateInputText(newText) {
  //   this._state.dialogsPage.newWords = newText;
  //   this._callSuscriber(this._state);
  // },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        text: this._state.profilePage.newWords,
        likes: 0,
        id: 3,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newWords = '';
      this._callSuscriber(this._state);
    } else if (action.type === 'UPDATE-INPUT-POST') {
      this._state.profilePage.newWords = action.newPost;
      this._callSuscriber(this._state);
    } else if (action.type === 'ADD-TEXT') {
      let newText = {
        text: this._state.dialogsPage.newWords,
        id: 4,
      };

      this._state.dialogsPage.dialogsItem.push(newText);
      this._state.dialogsPage.dialogsItem.newWords = '';
      this._callSuscriber(this._state);
    } else if (action.type === 'UPDATE-INPUT-TEXT') {
      this._state.dialogsPage.newWords = action.newText;
      this._callSuscriber(this._state);
    }
  },
};

export default store;
