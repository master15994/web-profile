import { combineReducers, legacy_createStore } from 'redux';
import newsColumnReducer from './newsColumn-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';

let reducers = combineReducers({
  newsColumn: newsColumnReducer,
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
});

let store = legacy_createStore(reducers);

export default store;
