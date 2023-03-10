import { useState, useEffect } from 'react';
import { fetchDecoderVin } from 'service/apiService';
import { useSearchParams } from 'react-router-dom';
import Spinner from 'components/Spinner/Spinner';
import SearchBar from 'components/SearchBar/SearchBar';
import DecodedList from 'components/DecodedList/DecodedList';
import Message from 'components/Massage/Message';
import HistoryList from 'components/HistoryList/HistoryList';

const MainPage = () => {
  const [message, setMessage] = useState('');
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const queryParam = value => {
    setSearchParams(value !== '' ? { vinCode: value } : {});
  };

  const query = searchParams.get('vinCode');

  useEffect(() => {
    if (!query) {
      return;
    }

    setIsLoading(true);

    fetchDecoderVin(query)
      .then(res => {
        setResults(res.Results);
        setMessage(res.Message);
      })
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [query]);

  const filteredResult = results?.filter(
    item => item.Value && item.Value !== '0' && item.Variable !== 'Error Text'
  );

  return (
    <main>
      <SearchBar onSubmit={queryParam} />
      {error && <Message text={error.message} />}
      {message && <Message text={message} />}
      <HistoryList />
      {query && <h3> VIN:{query}</h3>}
      {isLoading && <Spinner />}
      {!isLoading && filteredResult && <DecodedList data={filteredResult} />}
    </main>
  );
};

export default MainPage;
