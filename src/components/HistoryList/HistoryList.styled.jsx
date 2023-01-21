import styled from "styled-components";

export const List = styled.ul`
    border:1px solid black
`
export const Item = styled.li`

 
`;
export const ListTitle =styled.h3`
    font-size:14px;
`

export const Btn = styled.button`
  padding: 4px;
  background-color:${props=>props.isActive?"#3f51b5":"transparent"};
  color: #fff;
  &:hover {
    color: black;
  }
`;