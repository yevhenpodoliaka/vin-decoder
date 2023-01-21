import { useState, useEffect } from 'react';
import { fetchInfo } from 'service/apiService';
import VariablesList from 'components/VariablesList/VariablesList';
import PageTitle from 'components/PageTitle/PageTitle';
const VariablePage = () => {
      const [info, setInfo] = useState([]);

      useEffect(() => {
        fetchInfo().then(setInfo).catch(console.log);
      }, []);

 return <main>
  <PageTitle text="Variables List"/>
  {info && <VariablesList data={info.Results} />}
  </main>;
};

export default VariablePage;
