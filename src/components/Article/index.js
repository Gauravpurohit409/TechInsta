import React from 'react';
import faker from 'faker';
import "./index.css"

const Article = (props) => {
    console.log("hhello",props.article.url());
    return (
        <>
        <div id="container">
            <img src = {props.article.url()} alt="not available" />
            {/* <span class="justToClearFloat"></span> */}
            <span id="title">{props.article.Title()}</span>
            <p>{props.article.Description()}</p>
        </div>
        <div class= "justToClearFloat">
        </div>
   
        </>
    );
};

export default Article;