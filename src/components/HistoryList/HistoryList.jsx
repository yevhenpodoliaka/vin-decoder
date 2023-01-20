import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { List, Item, ListTitle, Btn } from './HistoryList.styled';
import useLocalStorage from 'hooks/useLocalStorage';

const HistoryList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [historyList, setHistoryList] = useLocalStorage("historyList",[]);

  const queryParam = value => {
    setSearchParams(value !== '' ? { vinCode: value } : {});
  };

  const query = searchParams.get('vinCode');

  useEffect(() => {
    if (!query) {
      return;
    }
    if (historyList.includes(query)) {
      setHistoryList(prevHistory=>[query,...prevHistory.filter(i=>i!==query)])
      return
    }
    setHistoryList(prevHistory => [query, ...prevHistory.slice(0, 4)]);
  }, [historyList, query, setHistoryList]);

  return (
    <>
      {historyList.length ? <ListTitle>History List</ListTitle> : null}
      <List>
        {historyList?.map((item, index) => (
          <Item key={index}>
            <Btn
              onClick={() => {
                queryParam(item);
              }}
            >
              {item}
            </Btn>
          </Item>
        ))}
      </List>
    </>
  );
};

export default HistoryList;
