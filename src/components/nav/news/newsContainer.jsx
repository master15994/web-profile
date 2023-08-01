import React from 'react';
import n from './news.module.css';
import NewPosts from './newPosts/newPosts';
import { addNewsActionCreator, updateInputNewsActionCreator } from '../../../redux/newsColumn-reducer';

const NewsContainer = props => {
    let newsItem = props.newsColumn.newsItem.map(item => {
        return <NewPosts text={item.text} id={item.id} />;
    });

    let onNewsChangeClick = event => {
        props.dispatch(updateInputNewsActionCreator(event.target.value));
    };
    let onaAddNews = () => {
        props.dispatch(addNewsActionCreator());
    };

    return (
        <div className={n.wrapper}>
            <div>{newsItem}</div>
            <div>
                <textarea value={props.newsColumn.newItemMessage} onChange={onNewsChangeClick} />
                <br />
                <button onClick={onaAddNews}>Add News</button>
            </div>
        </div>
    );
};

export default NewsContainer;
