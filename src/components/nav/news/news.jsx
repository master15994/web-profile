import React from 'react';
import n from './news.module.css';
import NewPosts from './newPosts/newPosts';
import {
  addNewsActionCreator,
  updateInputNewsActionCreator,
} from '../../../redux/newsColumn-reducer';

const News = props => {
  let newsItem = props.newsColumn.newsItem.map(item => {
    return <NewPosts text={item.text} id={item.id} />;
  });

  let onNewsChangeClick = event => {
    let body = event.target.value;
    props.dispatch(updateInputNewsActionCreator(body));
  };
  let onaAddNews = () => {
    props.dispatch(addNewsActionCreator());
  };

  return (
    <div className={n.wrapper}>
      <div>{newsItem}</div>
      <div>
        <textarea onChange={onNewsChangeClick}></textarea>
        <br />
        <button onClick={onaAddNews}>Add News</button>
      </div>
    </div>
  );
};

export default News;
