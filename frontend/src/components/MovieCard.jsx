import '../css/MovieCard.css';

const MovieCard = ({ movie }) => {
  const onFavoriteClick = () => {
    console.log('click');
  };

  return (
    <div className='movie-card'>
      <div className='movie-poster'>
        <img src={movie.url} alt={movie.title} />
        <div className='movie-overlay'>
          <button className='favorirte-btn' onClick={onFavoriteClick}>
            ❤️
          </button>
        </div>
      </div>
      <div className='movie-info'>
        <h3>{movie.title}</h3>
        <p>{movie.release_data}</p>
      </div>
    </div>
  );
};

export default MovieCard;
