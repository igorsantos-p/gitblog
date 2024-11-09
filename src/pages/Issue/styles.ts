import styled from "styled-components";

export const IssueContainer = styled.div`
  max-width: 54rem;
  width: 100%;
  margin: -88px auto 0;
`;

export const IssueHeaderContainer = styled.div`
  border-radius: 10px;
  padding: 2rem;
  background-color: ${(props) => props.theme["slate-800"]};

  h2 {
    margin-top: 1.25rem;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  a {
    font-weight: bold;
    color: ${(props) => props.theme["blue-500"]};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.75rem;
    position: relative;
    line-height: 0;

    &::before {
      content: "";
      width: 0;
      height: 1px;
      background-color: ${(props) => props.theme["blue-500"]};
      position: absolute;
      bottom: -4px;
      transition: 0.3s;
    }

    &:hover::before {
      width: 100%;
    }

    svg {
      color: ${(props) => props.theme["blue-500"]};
      height: 12px;
      width: 12px;
    }
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 0.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme["slate-500"]};
      height: 18px;
      width: 18px;
    }
  }
`;

export const IssueContent = styled.div`
  padding: 2.5rem 2rem;
  width: 100%;

  img {
    max-width: 100%;
  }
`;
