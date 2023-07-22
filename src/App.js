import React from 'react';
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';
import Dialogs from './components/nav/dialogs/dialogs';
import { Route, Routes } from 'react-router-dom';
import News from './components/nav/news/news';
import Music from './components/nav/music/music';
import Settings from './components/nav/settings/settings';

const App = props => {
  return (
    <div className="main-wrapper">
      <Header />
      <Nav />
      <div className="content">
        <Routes>
          <Route
            path="/profile"
            element={<Profile dispatch={props.dispatch} posts={props.store} />}
          />
          <Route
            path="/dialogs/*"
            element={
              <Dialogs
                dispatch={props.dispatch}
                dialogs={props.store.dialogsPage}
              />
            }
          />
          <Route
            path="/news/*"
            element={
              <News
                dispatch={props.dispatch}
                newsColumn={props.store.newsColumn}
              />
            }
          />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
