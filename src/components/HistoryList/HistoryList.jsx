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
                setHistoryList(prevHistory => [
                   item,
                   ...prevHistory.filter(i => i !== item),
                 ]);
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
