import { useState, useEffect } from "react";
import {fetchDecoderVin} from 'service/apiService';
import SearchBar from "components/SearchBar/SearchBar";

const MainPage = () => {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])

    useEffect(() => {
        if (query.trim() !== "") {
            fetchDecoderVin(query)
                .then(setResults)
                .catch(console.log)
    }
},[query])
    const filteredResult = results.filter(item => item.Value)
    console.log(filteredResult);
    return (
      <main>
        <SearchBar onSubmit={setQuery} />
        {filteredResult && (
          <ul>
            {filteredResult.map(item => (
              <li>{item.Value}</li>
            ))}
          </ul>
        )}
      </main>
    );
}

export default MainPage