import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { LiveProvider, LiveEditor, LivePreview } from "react-live";
import { Button, Input, message } from 'antd' 
const code = `
const UseState = () => {
  const [text, setText] = useState('Efeito')

  useEffect(() => { message.success('Use Effect Without Parameter'); })
  useEffect(() => { message.error('Use Effect With []'); }, [])
  useEffect(() => { message.warning('Use Effect With Parameter'); }, [text])
  useEffect(() => { return () => message.info('Use Effect With return'); }, [])

  return (
    <Container>
      <InputWrapper>
        <Input value={text} onChange={(e) => setText(e.target.value)}/> 
      </InputWrapper>
      <Text align="center">
        {text}
      </Text>
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

const InputWrapper = styled.div`
  margin: 10px auto ;
  width: 200px;
  height: 60px;
`
const Slide2 = () => {
  // useEffect(() => { return message.info('Use Effect With Parameter'); }, [])

  const scope ={
    styled, 
    message,
    useState, 
    useEffect,
    Input, 
    Container, 
    Header, 
    Text, 
    Button, 
    InputWrapper
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

export default Slide2;
