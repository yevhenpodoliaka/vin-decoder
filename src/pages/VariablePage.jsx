import { useState, useEffect } from 'react';
import { fetchInfo } from 'service/apiService';
import VariablesList from 'components/VariablesList/VariablesList';
import PageTitle from 'components/PageTitle/PageTitle';

const VariablePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchInfo()
      .then(setData)
      .catch(console.log)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main>
      <PageTitle text="Variables List" />
      {isLoading && <p>Loading ...</p>}
      {data && <VariablesList data={data.Results} />}
    </main>
  );
};

export default VariablePage;
