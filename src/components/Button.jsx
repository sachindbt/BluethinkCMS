import styled from "styled-components";

export default function Button({ content }) {
  return <StyledButton>{content}</StyledButton>;
}

const StyledButton = styled.button`
  background: linear-gradient(to right, #f00707 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 45%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
`;
