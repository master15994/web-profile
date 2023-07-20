import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';

let root = ReactDOM.createRoot(document.getElementById('root')); // Переменная root объявлена в глобальной области видимости

export let rerenderEntireTree = () => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          store={store.getState()}
          dispatch={store.dispatch.bind(store)}
          // updateInputPost={store.updateInputPost.bind(store)}
          // addText={store.addText.bind(store)}
          // updateInputText={store.updateInputText.bind(store)}
        />
      </React.StrictMode>
    </BrowserRouter>
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

export default rerenderEntireTree;

reportWebVitals();
