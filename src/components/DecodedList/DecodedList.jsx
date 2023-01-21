import { List, Item, VariableText, ValueText } from '../ListTable/ListTable.styled';

const DecodedList = ({ data }) => {
  return (
    <List>
      {data?.map(({ Variable, Value }, index) => (
        <Item key={index}>
          <VariableText>{Variable}</VariableText>
          <ValueText>{Value}</ValueText>
        </Item>
      ))}
    </List>
  );
};

export default DecodedList;
