import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import config from "../config/config.js";
import { RotatingLines } from "react-loader-spinner";

function News({ category }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=${import.meta.env.VITE_API_KEY}`
        );

        console.log(response.data);
        setArticles(response.data.articles);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    setLoading(true)
setTimeout(() => {
    fetchData();
}, 2000);
   
  }, [category]);
  if(loading) return <div className="h-[100vh] flex justify-center items-center">
    <RotatingLines
  visible={true}
  height="96"
  width="96"
  color="grey"
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
  </div> 
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <h1 className="text-2xl text-stone-800 dark:text-cyan-500 font-bold text-center my-10">
        News: {category.toUpperCase()}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-[5%]">
        {articles.map((article) => (
          <div key={article.url}>
            <NewsItem
              title={article.title}
              description={article.description}
              urlToImage={
                article.urlToImage
                  ? article.urlToImage
                  : "https://ma-hub.imgix.net/wp-images/2020/07/21183139/Video-Effects-News-Background.jpg"
              }
              url={article.url}
              author={article.author}
              publishedAt={article.publishedAt}
              source={article.source.name}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default News;
