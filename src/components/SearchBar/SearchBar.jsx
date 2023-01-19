import { useState } from "react";
import { FiSearch } from 'react-icons/fi';
import { Form, Btn, Input } from './SearchBar.styled';

const SearchBar= ({onSubmit}) => {
  const [value, setValue] = useState('');
  
//TODO Validation input!!!!!!!!!!!!!!!
  const handleChange = e => {
    setValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (

      <Form onSubmit={handleSubmit}>
        <Btn type="submit">
          <FiSearch />
        </Btn>

        <Input
          onChange={handleChange}
          value={value}
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Enter your VIN-CODE"
        />
      </Form>
  );
};

export default SearchBar;
