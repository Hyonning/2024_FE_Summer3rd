import { styled } from "styled-components";

export const NewsListContainer = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  font-family: "Arial", sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TabMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;
  margin-top: 2rem;
  border: 1px solid white;
  width: 900px;
`;

export const ContentsContainer = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Contents = styled.div`
  display: flex;
  padding: 10px 0;
`;

export const ThumbNail = styled.div`
  width: 150px;
  height: 100px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Detail = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translateY(-30%);
`;
