import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchInfoById } from 'service/apiService';
import VariablesDetailsList from 'components/VariablesDetailsList/VariablesDetailsList';
import PageTitle from 'components/PageTitle/PageTitle';
import Message from 'components/Massage/Message';

const VariablesDetailsPage = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const { variablesId } = useParams();

  const { state } = useLocation();

  useEffect(() => {
    if (!variablesId) {
      return;
    }

    setIsLoading(true);
    fetchInfoById(variablesId)
      .then(setData)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [variablesId]);

  return (
    <main>
      <PageTitle text="VariablesDetailsPage" />
      {error && <Message text="Error!!!!" />}
      {isLoading && <p>Loading ...</p>}
      <VariablesDetailsList data={data} description={state.description} />
    </main>
  );
};

export default VariablesDetailsPage;
