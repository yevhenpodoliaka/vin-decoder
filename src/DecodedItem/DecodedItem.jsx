import React from 'react'
import { Item ,VariableText,ValueText} from './DecodedItem.styled';
const DecodedItem = ({ Variable, Value }) => {
    return (
      <Item>
        <VariableText >{Variable}</VariableText>
        <ValueText >{Value}</ValueText>
      </Item>
    );
};

export default DecodedItem