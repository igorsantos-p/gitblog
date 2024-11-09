import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 54rem;
  width: 100%;
  margin: -88px auto 0;
`;

export const HeaderContainer = styled.header`
  margin-top: 4.5rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    font-size: 18px;
    color: ${(props) => props.theme["slate-200"]};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["slate-400"]};
  }
`;

export const PostsContainer = styled.section`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 416px);
  gap: 2rem;
`;

export const Post = styled(Link)`
  padding: 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme["slate-800"]};
  height: 260px;
  width: 100%;
  border: 2px solid transparent;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme["slate-300"]};

  &:hover {
    border: 2px solid ${(props) => props.theme["slate-500"]};
  }

  header {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 0.5rem;

    h3 {
      font-size: 1.25rem;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      color: ${(props) => props.theme["slate-100"]};
    }
    
    span {
      display: block;
      font-size: 0.75rem;
      white-space: nowrap;
      color: ${(props) => props.theme["slate-400"]};
    }
  }

  & p {
    margin-top: 1.25rem;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`;
