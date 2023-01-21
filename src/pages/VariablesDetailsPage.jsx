import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchInfoById } from 'service/apiService';
import VariablesDetailsList from 'components/VariablesDetailsList/VariablesDetailsList';
import PageTitle from 'components/PageTitle/PageTitle';

const VariablesDetailsPage = () => {
  const [data, setData] = useState([]);
  const { variablesId } = useParams();

  useEffect(() => {
    if (!variablesId) {
            return
          }
            fetchInfoById(variablesId).then(setData).catch(console.log);
        }, [variablesId]);

  return (
    <main>
      <PageTitle text="VariablesDetailsPage" />
      <VariablesDetailsList data={data} />
    </main>
  );
};

export default VariablesDetailsPage;

