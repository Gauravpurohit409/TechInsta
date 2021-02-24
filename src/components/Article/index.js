import React from 'react';
import "./index.css"

const Article = (props) => {
    console.log("hhello",props.article.url());
    return (
        <>
        <div className="container">
            <div id ="left">
                <img src = {props.article.url()} alt="not available" />
                <span className="justToClearFloat"></span>
                <div id= "text">
                    <span id="title">{props.article.Title()}</span>
                    <p id = "body">{props.article.Description()}</p>
                </div>
            </div>
            <div id= "right">
            <i className="fa fa-caret-up" ></i>
            <span style = {{fontWeight : 'bold',fontSize : 'small'}}>1,000</span>
            </div>
        </div>
        <div className= "justToClearFloat">
        </div>
   
        </>
    );
};

export default Article;