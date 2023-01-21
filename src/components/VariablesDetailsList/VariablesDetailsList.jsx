import {
  List,
  Item,
  ValueText,
  VariableText,
} from '../ListTable/ListTable.styled';

const VariablesDetailsList = ({ data, description }) => {

  return (
    <>
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <List>
        {data?.map(({ ElementName, Id, Name }) => (
          <Item key={Id}>
            <VariableText> {ElementName}</VariableText>
            <ValueText>{Name}</ValueText>
          </Item>
        ))}
      </List>
    </>
  );
};

export default VariablesDetailsList;
