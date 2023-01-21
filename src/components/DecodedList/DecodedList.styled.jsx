import styled from "styled-components";

export const List = styled.ul`
  li:not(:last-child) {
    margin-bottom:8px
  }

`;
export const Item = styled.li`
  display: flex;
  background-color:#f1f1f1
`;
export const VariableText = styled.p`
  padding: 4px;
  font-weight: 700;
  width: 50%;
  border: 1px solid black;
`;
export const ValueText = styled.p`
  padding: 4px;
  font-style: italic;
  width: 50%;
  border: 1px solid black;
`;