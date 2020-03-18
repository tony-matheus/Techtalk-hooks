import React, { useState, useEffect, useMemo, useCallback } from "react";
import styled from "styled-components/macro";
import { LiveProvider, LiveEditor, LivePreview } from "react-live";
import { Button, Input, message } from 'antd'
const code = `
const UseState = () => {
  const [a, setA] = useState(3)
  const [b, setB] = useState(4)
  
  const sum = useCallback( () =>  {
    message.success(a)
    a + b
  }, [])

  const sumMemo = useMemo( () => {
    return a + b
  }, [])

  const showMessage = (fn) => {
    message.success(fn())
  }

  return (
    <Container>
      <Header>UseMemo vs UseCallback</Header>
      <Wrapper>
        <Column>
          <Title>A Value</Title>
          <InputWrapper>
            <Input 
              value={a}
              onChange={(e) => setA(+e.target.value)}
            />
          </InputWrapper>
        </Column>
        <Column>
          <Title>B Value</Title>
          <InputWrapper>
            <Input 
              value={b}
              onChange={(e) => setB(+e.target.value)}
            />
          </InputWrapper>
        </Column>
      </Wrapper>
      <Wrapper>
        <Column>
          <Title>Use Callback</Title>
          <ButtonWrapper>
            <Button 
              onClick={() => sum()}>
              Button useCallback
            </Button>
          </ButtonWrapper>
        </Column>
        <Column>
        <Title>No Use Memo Value</Title>
          <ButtonWrapper>
            <Text align="center">
              {sumMemo}
            </Text>
          </ButtonWrapper>
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

const Title = styled.h1`
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
`;

const Text = styled.h2`
  font-size: 2.5rem;
  margin-top: -15px;
  color: #448AFF;
  text-align: ${props => props.align};

  &:hover {
    color: #2962FF;
  }
`;

const Wrapper = styled.div`
  display: flex;
  /* flex: 1; */
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

const ButtonWrapper = styled.div`
  margin: 10px auto ;
  width: 200px;
  height: 60px;
`
const Slide5 = () => {

  const scope = {
    styled,
    message,
    useState,
    useEffect,
    useCallback,
    useMemo,
    Input,
    Container,
    Header,
    Text,
    Button,
    InputWrapper,
    ButtonWrapper,
    Wrapper,
    Column,
    Title
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

export default Slide5;
