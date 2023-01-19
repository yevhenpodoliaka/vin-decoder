import { useState, useEffect } from 'react';
import { fetchDecoderVin } from 'service/apiService';
import SearchBar from 'components/SearchBar/SearchBar';
import DecodedList from 'components/DecodedList/DecodedList';

const MainPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.trim() !== '') {
      fetchDecoderVin(query)
        .then(setResults)
        .catch(console.log);
    }
  }, [query]);
  const filteredResult = results.filter(
    item => item.Value && item.Value !== '0' && item.Variable !== 'Error Text'
  );
  console.log(filteredResult);
  return (
    <main>
      <SearchBar onSubmit={setQuery} />
      {filteredResult && <DecodedList data={filteredResult} />}
    </main>
  );
};

export default MainPage;
