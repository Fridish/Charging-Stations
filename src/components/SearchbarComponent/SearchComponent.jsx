import { useState } from 'react';
import styles from './SearchComponent.module.css';

function SearchComponent({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery); // Pass the search query to the parent (or Map component)
  };

  return (
    <div className={styles.searchContainer}>
      <input
        placeholder="Search for a location"
        className={styles.input}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch} className={styles.searchButton}>
        Search
      </button>
    </div>
  );
}

export default SearchComponent;