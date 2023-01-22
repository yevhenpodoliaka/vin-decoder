import { useState } from "react";
import { FiSearch } from 'react-icons/fi';
import { Form, Btn, Input ,ErrorInputText} from './SearchBar.styled';

const SearchBar= ({onSubmit}) => {
  const [value, setValue] = useState('');
  

  const handleChange = e => {
    setValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value.trim());
    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        onChange={handleChange}
        value={value}
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Enter your VIN-CODE"
        minLength={17}
        maxLength={17}
      />
      <ErrorInputText>Length vin-code must have 17 symbols</ErrorInputText>
      <Btn type="submit">
        <FiSearch />
      </Btn>
    </Form>
  );
};

export default SearchBar;
