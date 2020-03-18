import React from "react";
import styled from 'styled-components'
import Header from "../components/Header";
import PreviewContainer from "../components/PreviewContainer";
import PreviewContent from "../components/PreviewContent";
import { TextBackground } from '../components/TextBackground'
const Wrapper = styled.div`
  color: white;
  text-align: center;
  & ul{
    list-style-type: none;
  }
`

const LinkTitle = styled.h3`
  color: white;
`

const CustomHeader = styled(TextBackground)`
  font-size: 200px;
`

const Slide7 = () => {
  return (
    <div className="slide slide-column slide-7">
      <PreviewContainer>
        <PreviewContent>
          <CustomHeader>OBRIGADO!</CustomHeader>
          <Wrapper>
            <LinkTitle>Links:</LinkTitle>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://pt-br.reactjs.org/docs/hooks-intro.html"
                  rel="noopener noreferrer"
                >
                  React Hooks Documentation
              </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://tableless.com.br/react-hooks/"
                  rel="noopener noreferrer"
                >
                  What is Hooks
              </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://kentcdodds.com/blog/usememo-and-usecallback"
                  rel="noopener noreferrer"
                >
                  UseMemo e UseCallback
              </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://wattenberger.com/blog/react-hooks"
                  rel="noopener noreferrer"
                >
                  Classes vs Hooks
              </a>
              </li>
            </ul>
          </Wrapper>
        </PreviewContent>
      </PreviewContainer>
    </div>
  );
};

export default Slide7;
