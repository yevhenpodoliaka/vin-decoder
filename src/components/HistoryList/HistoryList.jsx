import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import{List, Item,ListTitle } from "./HistoryList.styled"

const HistoryList = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [historyList, setHistoryList] = useState([]);

  const queryParam = value => {
    setSearchParams(value !== '' ? { vinCode: value } : {});
    };
    
  const query = searchParams.get('vinCode');

    useEffect(() => {
        setHistoryList(prevHistory => [query, ...prevHistory]);
    }, [query]);
    
  return (
    <>
    <ListTitle>History List</ListTitle>
      <List>
        {historyList?.map((item, index) => (
          <Item key={index} onClick={() => queryParam(item)}>
            <p>{item}</p>
          </Item>
        ))}
      </List>
    </>
  );
};

export default HistoryList;
