import styled from "styled-components";

export const SearchFormContainer = styled.form`
  margin-top: 0.75rem;

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme["slate-600"]};
    background: ${(props) => props.theme["slate-950"]};
    color: ${(props) => props.theme["slate-300"]};

    &::placeholder {
      color: ${(props) => props.theme["slate-500"]};
      font: 400 1rem/160% "Nunito", sans-serif;
    }

    &:focus {
      outline: none;
      border: 1px solid ${(props) => props.theme["blue-500"]};
    }
  }
`;
