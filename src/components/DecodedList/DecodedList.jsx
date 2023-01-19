import DecodedItem from 'DecodedItem/DecodedItem';
import { List } from './DecodedList.styled';

const DecodedList =({ data })=> {
  return (
    <List>
      {data?.map(({ Variable, Value, },index) => (
        <DecodedItem key={index} Variable={Variable} Value={Value} />
      ))}
    </List>
  );
};

export default DecodedList;
