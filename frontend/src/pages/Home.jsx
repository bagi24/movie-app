import MovieCard from '../components/MovieCard';
import { useState } from 'react';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const movies = [
    { id: 1, title: 'Avatar1', release_data: '2021' },
    { id: 2, title: 'BAvatar2', release_data: '2022' },
    { id: 3, title: 'GAvatar3', release_data: '2023' },
    { id: 4, title: 'DAvatar4', release_data: '2024' },
  ];

  const handleSearch = e => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery('......');
  };
  return (
    <div className='home'>
      <form onSubmit={handleSearch} className='search-form'>
        <input
          type='text'
          placeholder='Search for movies...'
          className='search-input'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button type='submit' className='search-button'>
          {' '}
          Search
        </button>
      </form>
      <div className='movies-grid'>
        {movies.map(
          movie =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
};

export default Home;
