import { useState, useEffect } from 'react';
import { fetchInfo } from 'service/apiService';
import Message from 'components/Massage/Message';
import VariablesList from 'components/VariablesList/VariablesList';
import PageTitle from 'components/PageTitle/PageTitle';

const VariablePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchInfo()
      .then(setData)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main>
      <PageTitle text="Variables List" />
      {error && <Message text="Error!!!!" />}
      {isLoading && <p>Loading ...</p>}
      {data && <VariablesList data={data.Results} />}
    </main>
  );
};

export default VariablePage;
