import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchInfoById } from 'service/apiService';
import VariablesDetailsList from 'components/VariablesDetailsList/VariablesDetailsList';


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
    <main >
      <h3>VariablesDetailsPage</h3>
      <VariablesDetailsList data={data} />
    </main>
  );
};

export default VariablesDetailsPage;

