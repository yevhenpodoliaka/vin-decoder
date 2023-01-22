import {
  List,
  Item,
  ValueText,
  VariableText,
} from '../ListTable/ListTable.styled';

const VariablesDetailsList = ({ data, description}) => {

  return (
    <>
      {description&&<p dangerouslySetInnerHTML={{ __html: description }} style={{backgroundColor:"#f1f1f1", marginBottom:"8px", padding:"12px"}} />}
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
