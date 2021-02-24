import React, { useDebugValue, useEffect, useState } from 'react';
import Article from '../Article';
import faker from 'faker';
import UpcomingProducts from '../UpcomingProducts';
import "./index.css"

const Home = () => {

    const [articles,setArticles] = useState([]);
    const [number,setNumber] = useState(5);
    const getArticles = articles.map((article)=>{
        return <li className ="articles"> <Article article = {article}/> </li>
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
    (articles.length < number)? fill_data() : <></>   
    console.log("article is ",articles);

   const handleScroll = () => {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight) {
           
            console.log("bottom reached");
            setNumber(number+5);
        } else {

            console.log("not at bottom ");
        }
    }
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
       
       return () =>{ 
           window.removeEventListener("scroll",handleScroll);
       }
    })
    return (
        <div id="home">
        
            <ul>
                <li><h3>Today</h3></li>
                {getArticles}
            </ul>

            <div id="upcomingEvents">
                <UpcomingProducts />
            </div>
        </div> 
        

    );
};

export default Home;