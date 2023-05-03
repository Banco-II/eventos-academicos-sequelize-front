import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Button() {
  const navigate = useNavigate();

  return <ButtonStyled onClick={() => navigate("/")} />;
}

const ButtonStyled = styled.button`
  margin: 40px auto;
  border-radius: 10px;
  background-color: #000000;
  border: 1px solid #fff;
  width: 100%;
  height: 60px;

  font-family: "Poppins", sans-serif;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s all;
`;
