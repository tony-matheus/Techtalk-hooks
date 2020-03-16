import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components/macro";
import { LiveProvider, LiveEditor, LivePreview } from "react-live";
import { Button, Input, message, notification } from 'antd'


const code = `
const UseState = () => {
  const [apple, setApple] = useState('abc')
  const [banana, setBanana] = useState('123')
  
  const test = useMemo(
    () => apple.split('').map(char => {
      message.success(char)
      return char + ' '
    }), [apple])

  const test2 = banana.split('').map(char => {
    message.info(char)
    return char + ' '
  })

  return (
    <Container>
      <Wrapper>
        <Column>
          <Header>Use Memo</Header>
          <InputWrapper>
            <Input 
              value={apple} 
              onChange={(e) => setApple(e.target.value)}/> 
          </InputWrapper>
          <Text align="center">
            {apple}
          </Text>
          <Text align="center">
            {test}
          </Text>
        </Column>
        <Column>
          <Header>No Use Memo</Header>
          <InputWrapper>
            <Input 
              value={banana} 
              onChange={(e) => setBanana(e.target.value)}/> 
          </InputWrapper>
          <Text align="center">
            {banana}
          </Text>
          <Text align="center">
            {test2}
          </Text>
        </Column>
      </Wrapper>
    </Container>
  )
}

render(
  <UseState/>
);`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.h1`
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
`;

const Text = styled.h2`
  font-size: 2.5rem;
  color: #448AFF;
  margin: 30px;
  text-align: ${props => props.align};

  &:hover {
    color: #2962FF;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
`

const InputWrapper = styled.div`
  margin: 10px auto ;
  width: 200px;
  height: 60px;
`
const Slide3 = () => {
  // useEffect(() => { return message.info('Use Effect With Parameter'); }, [])

  const scope = {
    styled,
    message,
    useState,
    useEffect,
    useMemo,
    Input,
    Container,
    Header,
    Text,
    Button,
    InputWrapper,
    Wrapper,
    Column
  }

  return (
    <div className="slide slide-row slide-1">
      <LiveProvider code={code} scope={scope} noInline>
        <LivePreview className="code-preview" />
        <div className="code-editor-container">
          <LiveEditor className="code-editor" />
        </div>
      </LiveProvider>
    </div>
  );
};

export default Slide3;
