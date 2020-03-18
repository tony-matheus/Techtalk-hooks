import React from "react";
import styled from 'styled-components'
import { Result, Button } from 'antd';

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

export const CustomResult = styled(Result)`
  & .ant-result-title{
    color: white;
  }
`

const Slide6 = () => {
  return (
    <Wrapper>
      <CustomResult
        title="Classes vs Hooks"
        extra={
          <Button type="primary" key="console" onClick={() => {
              window.open("https://wattenberger.com/blog/react-hooks", "_blank")
            }}>
            Site Util de Comparativo  
          </Button>
        }
      />,
    </Wrapper>
  );
};

export default Slide6;
