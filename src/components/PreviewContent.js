import styled from "styled-components";

const PreviewContent = styled.div`
  display: flex;
  flex-direction: ${props => (props.row ? "row" : "column")};
  margin: auto;
`;

export default PreviewContent;
