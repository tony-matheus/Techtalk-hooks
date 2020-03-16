import React from "react";
import styled from 'styled-components'
import Header from "../components/Header";
import reactHooksLogo from "../assets/reactHooks.png";

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.img`
  width: 300px;
  margin-top: 25px;
`


const Slide0 = () => {
  return (
    <Wrapper>
      <Header>Stateless React programming - react hooks</Header>
      <Logo src={reactHooksLogo} alt="styled-components" />
    </Wrapper>
  );
};

export default Slide0;
