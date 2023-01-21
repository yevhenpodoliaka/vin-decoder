import styled from "styled-components";

export const List = styled.ul`
display:flex;
flex-wrap:wrap;
gap:8px;
    
`
export const Item = styled.li`
border: 1px solid black;
 
`;
export const ListTitle =styled.h3`
    font-size:14px;
`

export const Btn = styled.button`
  padding: 4px;
  background-color: ${props => (props.isActive ? '#3f51b5' : 'transparent')};
  color: black;
  &:hover {
    background-color: #3f51b5;
    color: #ffffff;
  }
`;