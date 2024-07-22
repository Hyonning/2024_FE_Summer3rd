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
import NewsCategory from "./NewsCategory";

const NewsList = () => {
  const [news, setNews] = useState([]);

  const fetchData = async () => {
    try {
      const apiKey = import.meta.env.VITE_NEWS_API_KEY;
      console.log("API Key:", apiKey); // API 키 확인
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}`
      );
      console.log("API 응답 데이터:", response.data); // 응답 데이터 확인
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
