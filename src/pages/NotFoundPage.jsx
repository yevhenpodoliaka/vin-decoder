import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink= styled(Link)`
    color:white;
    &:hover{
        color:blue;
    }
`

const NotFoundPage=()=> {
  return (
    <>
      <h1>404 This Page is NotFound !!!</h1>
      <StyledLink to={'/'}>Go Home Page</StyledLink>
    </>
  );
}

export default NotFoundPage
