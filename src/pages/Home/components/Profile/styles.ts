import styled from "styled-components";

export const ProfileContainer = styled.div`
  border-radius: 10px;
  display: flex;
  align-items: start;
  gap: 2rem;
  padding-inline: 2.5rem 2rem;
  padding-block: 2rem;
  background-color: ${(props) => props.theme["slate-800"]};

  a {
    font-weight: bold;
    color: ${(props) => props.theme["blue-500"]};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 0;
    position: relative;

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

export const Avatar = styled.div`
  img {
    display: block;
    width: 148px;
    height: 148px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-top: 1rem;
  }
`;

export const FollowersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-top: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    line-height: 0;
    color: ${(props) => props.theme["slate-400"]};


    svg {
      color: ${(props) => props.theme["slate-500"]};
      height: 18px;
      width: 18px;
    }
  }
`;
