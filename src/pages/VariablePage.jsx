import { useState, useEffect } from 'react';
import { fetchInfo } from 'service/apiService';
import VariablesList from 'components/VariablesList/VariablesList';

const VariablePage = () => {
      const [info, setInfo] = useState([]);

      useEffect(() => {
        fetchInfo().then(setInfo).catch(console.log);
      }, []);

 return <main>{info && <VariablesList data={info.Results} />}</main>;
};

export default VariablePage;
