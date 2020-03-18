import styled from "styled-components";
import runrunit from './runrunit.png';

export const TextBackground = styled.span`
  text-align: center;
  background-image: url(${({imgBackground}) => imgBackground || runrunit});
  background-size: cover;
  background-position: center;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-family: "Arial Black";
  font-size: 15rem;
`;


