import { useState, useEffect } from 'react';
import { fetchDecoderVin } from 'service/apiService';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import DecodedList from 'components/DecodedList/DecodedList';
import Message from 'components/Massage/Message';
import HistoryList from 'components/HistoryList/HistoryList';



const MainPage = () => {
  const [message, setMessage] = useState('')
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const queryParam = value => {
    setSearchParams(value !== '' ? { vinCode: value } : {});
  };

  const query = searchParams.get('vinCode');

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchDecoderVin(query)
          .then( res=>
            {setResults(res.Results)
              setMessage(res.Message)
            })
      .catch(console.log);
      
  },[ query])

  const filteredResult = results.filter(
    item => item.Value && item.Value !== '0' && item.Variable !== 'Error Text'
  );

  return (
    <main>
      <SearchBar onSubmit={queryParam} />
      <Message text={message}/>
      <HistoryList/>
      {filteredResult && <DecodedList data={filteredResult} />}
    </main>
  );
};

export default MainPage;