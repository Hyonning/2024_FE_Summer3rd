import Title from "../common/Title";
import {
  ContentsContainer,
  Detail,
  NewsListContainer,
  Contents,
  ThumbNail,
} from "./Styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { BtnWrapper, BtnContainer } from "../First/Styled";
import NewsCategory from "./NewsCategory";

const NewsList = () => {
  const [news, setNews] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${
          import.meta.env.VITE_NEWS_API_KEY
        }`
      );
      setNews(response.data.articles.filter((article) => article.urlToImage));
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <NewsListContainer>
      <Title title={"멋사 NEWS"} />
      <NewsCategory />
      <ContentsContainer>
        {news.map((article, index) => (
          <Contents key={index}>
            <ThumbNail>
              <img src={article.urlToImage} alt={article.title} />
            </ThumbNail>
            <Detail>
              <h2>{article.title}</h2>
            </Detail>
          </Contents>
        ))}
      </ContentsContainer>
    </NewsListContainer>
  );
};

export default NewsList;
