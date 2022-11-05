import { SearchForm, InputForm, SearchButton } from './MoviesPage.styled';
import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

   const handleQuerySearch = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Enter the film title');
    }

    onSearch(searchQuery);
    setSearchQuery('');
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} >
        <InputForm
          type="text"
          name="searchQuery"
          value={searchQuery}
          autoComplete="off"
          autoFocus
          placeholder="Search ..."
          onChange={handleQuerySearch}
          
        />
        <SearchButton
          type="submit"
          //   onClick={handleInputClear}
         
        >
          Search
        </SearchButton>
      </SearchForm>
    </>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
