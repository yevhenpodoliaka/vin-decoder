import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 auto;
  max-width: 200px;
`;
export const Item = styled.li`

  border: 1px solid black;
`;
export const ListTitle =styled.h3`
    font-size:14px;
    text-align: center;
`

export const Btn = styled.div`
text-align:center;
  padding: 4px;
  background-color: ${props => (props.isActive ? '#3f51b5' : 'transparent')};
  color: black;
  cursor: pointer;
  &:hover {
    background-color: #3f51b5;
    color: #ffffff;
  }
`;