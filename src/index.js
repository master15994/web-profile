import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state';

let root = ReactDOM.createRoot(document.getElementById('root')); // Переменная root объявлена в глобальной области видимости

export let rerenderEntireTree = () => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={store.getState()}
          addPost={store.addPost.bind(store)}
          updateInputText={store.updateInputText.bind(store)}
        />
      </React.StrictMode>
    </BrowserRouter>
  );
};

rerenderEntireTree(store.getState());

export default rerenderEntireTree;

store.subscribe(rerenderEntireTree);

reportWebVitals();
