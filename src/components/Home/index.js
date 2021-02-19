import React, { useState } from 'react';
import Article from '../Article';
import faker from 'faker';
import UpcomingProducts from '../UpcomingProducts';

const Home = () => {

    const [articles,setArticles] = useState([]);
    const getArticles = articles.map((article)=>{
        return <li> <Article article = {article}/> </li>
    })

    const fill_data = ()=>{
        const newArticle = {
            url :faker.image.imageUrl,
            Title:faker.company.companyName,
            Description:faker.lorem.sentence,
        }

        const newArticles = [...articles,newArticle]
        setArticles(newArticles);

    }
    (articles.length < 5)? fill_data() : <></>   
    console.log("article is ",articles);
    return (
        <>
        <ul>
            {getArticles}
        </ul>

        <div id="upcoming Events">
            <h2>Upcoming Products</h2>
            <UpcomingProducts />
            <h2>Hiring Now</h2>
        </div> 
        </>

    );
};

export default Home;