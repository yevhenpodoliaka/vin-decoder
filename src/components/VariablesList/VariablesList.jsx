import { Link } from 'react-router-dom';
import {
  List,
  Item,
  ValueText,
  VariableText,
} from '../ListTable/ListTable.styled';
const VariablesList = ({ data }) => {
  return (
    <List>
      {data?.map(({ Description, GroupName, ID, Name }) => (
        <Item key={ID}>
          <Link style={{display:"flex", width:"100%"}} to={`/variables/${ID}`} state={{ description: Description }}>
            <VariableText>GroupName:{GroupName}</VariableText>
            <ValueText>Name : {Name}</ValueText>
          </Link>
        </Item>
      ))}
    </List>
  );
};

export default VariablesList;
