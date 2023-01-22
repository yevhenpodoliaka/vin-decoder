import styled from 'styled-components';

export const Form = styled.form`
position:relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Btn = styled.button`
  display: inline-block;
  background-color: #3f51b5;
  width: 48px;
  height: 48px;
  border: 0;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  :hover {
    font-size: 16px;
    color: white;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 18px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
text-transform: uppercase;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }

`;
export const ErrorInputText = styled.p`
  position: absolute;
  bottom: -20px;
  left: 0;
  display:none;

  input:invalid +&{
    display: block;
    color: #1d069f;
  }
`;
